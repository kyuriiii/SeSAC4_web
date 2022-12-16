const router = require("express").Router();
var createError = require("http-errors");
const User = require("../../models/User");
const Planet = require("../../models/Planet");
const { Diary, Comment } = require("../../models/Diary");

// 댓글 삭제

// 댓글 작성하기
router.post("/postComment", async (req, res) => {
  // body로 값 받아오기
  const { postId, comment, writer } = req.body;
  // 값 할당
  const data = {
    postId: postId,
    comment: comment,
    writer: writer,
  };
  try {
    // 새로운 댓글 스키마 생성
    const newComment = await new Comment({
      _diary: data.postId,
      content: data.comment,
      writer: data.writer,
    });
    // 새로운 댓글 생성
    newComment.save((err, commentInfo) => {
      if (err) {
        console.log("*****Fail to save Planet***** ", err);
        res.status(400).json({ errors: "Fail to save Planet", err });
      } else {
        console.log("*****행성생성!*****", commentInfo);
        res.status(201).json({ success: true, commentInfo });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// 게시글, 게시글의 댓글 불러오기
router.get("/getPost/:postId", async (req, res) => {
  const { postId } = req.params;
  const _PostId = postId;
  try {
    // 게시글 objectId 값으로 검색
    const getPost = await Diary.findOne({ id: _PostId }).populate("_user");
    console.log(getPost);
    // 게시글의 comment 가져오기
    const comments = await Comment.find({ _diary: _PostId });
    res.status(200).send({ post: getPost, comments: comments });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
  //   값 할당
});

// 카테고리에 대한 글들 불러오기
router.get("/getPosts/:planet/:category", async (req, res) => {
  console.log("-----------------------------");
  const { planet, category } = req.params;
  //   값 할당
  const _Planet = planet;
  const _Category = category;

  try {
    //   행성 ObjectId 값
    const planetForId = await Planet.findOne({ name: _Planet });
    console.log(planetForId.member);
    // 행성 ObjectId, 카테고리 filter
    const diaries = await Diary.find({
      $and: [{ _planet: planetForId, _category: _Category }],
    }).populate("_user");
    console.log('1');
    res.status(200).send({ diaries: diaries });
  } catch (error) {
    console.log('2');
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// 글 작성
router.post("/writePost", async (req, res) => {
  const { planet, category, title, content, writerId } = req.body;

  //   값 할당
  const _Planet = planet;
  const _Category = category;
  const _Title = title;
  const _Content = content;
  const _WriterId = writerId;
  try {
    //   행성 ObjectId 값
    const planet = await Planet.findOne({ name: _Planet });
    const NewDiary = await new Diary({
      title: _Title,
      content: _Content,
      _user: _WriterId,
      _planet: planet.id,
      _category: _Category,
    });
    NewDiary.save((err, diaryInfo) => {
      if (err) {
        console.log("*****Fail to save Planet***** ", err);
        res.status(400).json({ errors: "Fail to save Planet", err });
      } else {
        console.log("**** 글 생성!*****", diaryInfo);
        res.status(201).json({ success: true, diaryInfo });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// 글 삭제
router.delete("/deletePost", async (req, res) => {
  const { postId } = req.body;
  const data = {
    id: postId,
  };

  try {
    Diary.deleteOne({ id: data.id });
    res.status(200).send("success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

router.get("/list/:_category", (req, res, next) => {
  const _category = req.params._category;
  let { search, sort, order, skip, limit } = req.query;
  if (!(sort && order && skip && limit))
    throw createError(400, "잘못된 요청입니다");
  if (!search) search = "";
  order = parseInt(order);
  limit = parseInt(limit);
  skip = parseInt(skip);
  const s = {};
  s[sort] = order;

  const f = {};
  if (_category) f._category = _category;
  let total = 0;

  Diary.countDocuments(f)
    .where("title")
    .regex(search)
    .then((r) => {
      total = r;
      return Diary.find(f)
        .where("title")
        .regex(search)
        .sort(s)
        .skip(skip)
        .limit(limit)
        .select("-content")
        .populate("_user", "-pwd");
    })
    .then((rs) => {
      res.send({ success: true, t: total, ds: rs, token: req.token });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

router.get("/read/:_id", (req, res, next) => {
  const _id = req.params._id;

  let dry = {};

  Diary.findByIdAndUpdate(_id, { $inc: { "cnt.view": 1 } }, { new: true })
    .lean()
    .select("content cnt")
    .then((r) => {
      if (!r) throw new Error("잘못된 게시판입니다");
      dry = r;
      dry._comments = [];
      return Comment.find({ _diary: dry._id })
        .populate({ path: "_user", select: "id name" })
        .sort({ _id: 1 })
        .limit(5);
    })
    .then((rs) => {
      if (rs) dry._comments = rs;
      res.send({ success: true, d: dry, token: req.token });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

router.post("/:_category", (req, res, next) => {
  const _category = req.params._category;
  const { title, content } = req.body;
  console.log(req.body);

  const dry = {
    title,
    content,
    _category,
    _user: null,
  };
  if (req.user._id) dry._user = req.user._id;
  return Diary.create(dry)
    .then((r) => {
      if (!r) throw new Error("게시물이 생성되지 않았습니다");
      res.status(200).send({ success: true, msg: r });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

router.put("/:_id", (req, res, next) => {
  // if (!req.user._id) throw createError(403, '게시물 수정 권한이 없습니다')
  const _id = req.params._id;
  const { title, content } = req.body;

  Diary.findById(_id)
    .then((r) => {
      if (!r) throw new Error("게시물이 존재하지 않습니다");
      if (!r._user) throw new Error("게시물은 수정이 안됩니다");
      if (r._user.toString() !== req.user._id)
        throw new Error("본인이 작성한 게시물이 아닙니다");
      return Diary.findByIdAndUpdate(
        _id,
        { $set: { title, content } },
        { new: true }
      );
    })
    .then((r) => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

router.delete("/:_id", (req, res, next) => {
  // if (!req.user._id) throw createError(403, '게시물 삭제 권한이 없습니다')
  const _id = req.params._id;

  Diary.findById(_id)
    .populate("_user")
    .then((r) => {
      if (!r) throw new Error("게시물이 존재하지 않습니다");
      else {
        if (r._user._id.toString() !== req.user._id)
          throw new Error("본인이 작성한 게시물이 아닙니다");
      }

      return Diary.deleteOne({ _id });
    })
    .then((r) => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

// Index
router.get("/", (req, res) => {
  try {
    Diary.find()
      .populate("_user")
      .populate("_planet")
      .sort(-createdAt)
      .exec((err, diaryAll) => {
        if (err) return res.status(400).json(err);
        res.status(200).json({ success: true, Index: diaryAll });
      });
  } catch (e) {
    res.status(500).send(e);
  }
});

// create
router.post("/", (req, res) => {
  req.body._user = req.user._id;
  Diary.create(req.body, function (err, diary) {
    if (err) return res.status(400).json(err);
    return res.status(201).json({ success: true, create: diary });
  });
});

// read
router.get("/:id", (req, res) => {
  Diary.findOne({ _id: req.params.id })
    .populate("_user")
    .exec((err, diary) => {
      if (err) return res.status(400).json(err);
      return res.status(200).json({ success: true, read: diary });
    });
});

// update
router.put("/:_id", (req, res) => {
  req.body.updateAt = Date.now();
  Diary.findOneAndUpdate({ _id: req.params.id }, req.body, (err, diary) => {
    if (err) return res.status(400).json(err);
    return res.status(200).json({ success: true, update: diary });
  });
});

// delete
router.delete("/:_id", (req, res) => {
  Diary.deleteOne({ _id: req.params._id }, (err) => {
    if (err) return res.status(400).json(err);
    return res.status(200).json({ success: true });
  });
});

// error handler
router.all("*", function (req, res, next) {
  next(createError(404, "no api"));
});

module.exports = router;
