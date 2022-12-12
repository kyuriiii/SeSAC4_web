const router = require("express").Router();
var createError = require("http-errors");
const passport = require("passport");

const User = require("../../models/User");
const Planet = require("../../models/Planet");

// const controller = require('../controllers/planet');

// workspace 행성 선택창
// 담당자 : 시온
router.get("/workspace/:userId", async (req, res) => {
  const { userId } = req.params;
  const _ID = userId;

  try {
    // user_id를 활용한 planet 탐색
    const planets = await Planet.find({ member: _ID });
    res.status(200).send({ planets: planets });
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});

// /dairy/main/:planetName/:category 입장시 로직
// 카테고리, 멤버, 글
// 카테고리
router.get("/getCategory/:planetName", async (req, res) => {
  console.log("req.params : ", req.params);
  const { planetName } = req.params;
  const _Name = planetName;

  try {
    // 행성 이름을 활용한 카테고리 탐색
    // 하나의 row만 탐색
    const planets = await Planet.findOne({ name: _Name });
    console.log("planets : ", planets);
    // 카테고리 res.send에 담아서 전송
    res
      .status(200)
      .send({ diary: planets.category.Diary, album: planets.category.Album });
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});
// 멤버
router.get("/getMembers/:planetName", async (req, res) => {
  const { planetName } = req.params;
  const _Name = planetName;
  try {
    // 행성 이름을 활용한 멤버 탐색
    // 멤버들의 objectID get
    const planetArr = await Planet.findOne({ name: _Name });
    // member 컬럼만 출력
    const memberArr = await planetArr.member;
    // member 배열에 대한 유저 스키마 검색
    const searchedArr = await User.find({ _id: memberArr });
    // 해당 멤버의 이름 배열로 저장
    const memberNameArr = await searchedArr.map((row) => row.username);
    // 멤버 이름 res.send에 담아서 전송
    res.status(200).send({ nameArr: memberNameArr });
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});

// planet 테이블 불러오기
// 담당자 : 시온
router.get("/:user/:planet", async (req, res) => {
  const { user, planet } = req.params;

  const _ID = user;
  const _Planet = planet;

  try {
    const user = await User.findOne({ userID: _ID });
    const planet = await Planet.findOne({ name: _Planet, member: user.id });

    res.status(200).send({
      planet: planet,
      diary: planet.category.Diary,
      album: planet.category.Album,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});

//& JWT verify
router.all("*", (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    console.log("passport-jwt");
    if (err | !user) res.status(400).json({ errors: info.message });
    next();
  })(req, res, next); // 미들웨어 내의 미들웨어
});

// 행성 생성
router.post("/create", async (req, res) => {
  const { name, member, select } = req.body;
  try {
    // 해당 멤버 탐색
    const exMember = await User.find({ userID: member });
    // 해당 멤버의 id 배열로 저장
    const memberIdArr = await exMember.map((row) => row.id);
    console.log( "memberIdArr : ", memberIdArr );
    // 행성 생성 모델 작성
    const newPlanet = await new Planet({
      name: name,
      select: select,
      member: memberIdArr,
    });
    // 행성 생성 로직 작성
    newPlanet.save((err, planetInfo) => {
      if (err) {
        console.log("*****Fail to save Planet***** ", err);
        res.status(400).json({ errors: "Fail to save Planet", err });
      } else {
        console.log("*****행성생성!*****", planetInfo);
        res.status(201).json({ success: true, planetInfo });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});

// 전체 행성조회
router.get("/", function (req, res, next) {
  Planet.find()
    .then((r) => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

// 행성수정
router.put("/:_id", (req, res) => {
  const _id = req.params._id;
  Planet.updateOne({ _id }, { $set: req.body })
    .then((r) => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

// 행성 삭제
router.delete("/:user/:planet", (req, res) => {
  const { user, planet } = req.params;

  const _ID = user;
  const _Planet = planet;

  const userInfo = User.findOne({ userID: _ID });

  Planet.deleteOne({ name: _Planet, member: userInfo.id })
    .then((r) => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

// error handler
router.all("*", function (req, res, next) {
  next(createError(404, "no API"));
});

module.exports = router;
