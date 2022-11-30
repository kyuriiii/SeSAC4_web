const models = require("../model/index");
const bcrypt = require("bcrypt");
const { response } = require("../..");
const salt = 10;
const { Op } = require("sequelize");

// 메인 화면
exports.get_home = (req, res) => {
  if (!req.session.user) {
    res.render("main");
  } else {
    res.redirect("dashboard");
  }
};

// 회원가입 페이지 렌더링
exports.get_signup = (req, res) => {
  if (!req.session.user) {
    res.render("signup");
  } else {
    res.redirect("dashboard");
  }
};

// 회원 정보 저장
exports.post_signup = async (req, res) => {
  let object = {
    id: req.body.id,
    password: await bcrypt.hash(req.body.password, salt),
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    nickname: req.body.nickname,
    phone_number: req.body.phone_number,
  };
  models.User.create(object).then((result) => {
    res.send(result);
  });
};

// 아이디 중복체크
exports.post_checkID = (req, res) => {
  console.log();
  models.User.findOne({
    where: { id: req.body.id },
  }).then((result) => {
    console.log(result);
    if (result == null) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  });
};

// 이메일 중복체크
exports.post_checkEmail = (req, res) => {
  models.User.findOne({
    where: { email: req.body.email },
  }).then((result) => {
    console.log(result);
    if (result == null) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  });
};

// 닉네임 중복체크
exports.post_checkNickname = (req, res) => {
  models.User.findOne({
    where: { nickname: req.body.nickname },
  }).then((result) => {
    console.log(result);
    if (result == null) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  });
};

// 로그인 페이지
exports.get_login = (req, res) => {
  if (!req.session.user) {
    res.render("login");
  } else {
    res.redirect("dashboard");
  }
};

// 로그인
exports.post_login = (req, res) => {
  models.User.findOne({
    where: { id: req.body.id },
  }).then(async (id) => {
    if (!id) return res.send(false);
    const password = await bcrypt.compare(req.body.password, id.password);
    if (password) {
      req.session.user = id.id;
      req.session.save(function () {
        res.send(true);
      });
    } else res.send(false);
  });
};

// 404 에러 사이트
exports.get_404 = (req, res) => {
  res.render("404");
};

// 아이디 찾기 사이트
exports.get_id_forgot = (req, res) => {
  res.render("id_forgot");
};

// 아이디 찾기 로직
exports.post_id_forgot = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  models.User.findOne({ where: { name: name, email: email } }).then(
    (result) => {
      res.send(result);
    }
  );
};

// 비밀번호 변경 사이트
exports.get_pw_forgot = (req, res) => {
  res.render("pw_forgot");
};

// 비밀번호 변경 전 유저 확인 로직
exports.post_pw_forgot_certify = (req, res) => {
  // 유저 확인 로직 작성 필요
  let id = req.body.id;
  let email = req.body.email;
  let name = req.body.name;

  console.log(id, email, name);
  // res.send로 비밀번호를 보내주세요.
  models.User.findOne({ where: { id: id, name: name, email: email } }).then(
    (result) => {
      req.session.checkUser = id;
      res.send(result);
    }
  );
};

// 비밀번호 재설정 페이지
exports.get_pw_forgot_modify = (req, res) => {
  res.render("pw_forgot_modify");
};

// 비밀번호 재설정 로직
exports.post_pw_forgot_modify = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, salt);
  models.User.update(
    { password: password },
    { where: { id: req.session.checkUser } }
  ).then((result) => {
    req.session.destroy();
    res.send("수정 성공");
  });
};

// 로그아웃
exports.get_logout = (req, res) => {
  req.session.destroy(function (err) {
    res.redirect("/");
  });
};

// 회원 정보 조회
exports.get_userinfo = (req, res) => {
  if (!req.session.user) res.redirect("/");
  else {
    models.User.findOne({
      where: { id: req.session.user },
    }).then((result) => {
      res.render("modify.ejs", { data: result });
    });
  }
};

// 회원 정보 수정 후 저장
exports.patch_userinfo = (req, res) => {
  let info = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    nickname: req.body.nickname,
    phone_number: req.body.phone_number,
  };
  models.User.update(info, { where: { id: req.body.id } }).then((result) => {
    res.send("수정 성공");
  });
};

// 회원 탈퇴
exports.delete_user = (req, res) => {
  req.session.destroy();
  models.User.destroy({ where: { id: req.body.id } }).then((result) => {
    res.send("탈퇴 성공");
  });
};

// 메모 페이지
exports.get_memo = (req, res) => {
  if (!req.session.user) res.redirect("/");
  else res.render("memo.ejs");
};
// 메모 페이지 메모들 불러오기
exports.get_memoes = (req, res) => {
  models.Memo.findAll({
    where: { user_id: req.session.user },
    order: [["date", "ASC"]],
  }).then((memo) => {
    res.send({ memo });
  });
};
// 메모 저장
exports.post_writememo = (req, res) => {
  // 제목, 날짜, html화 된 내용,
  let object = {
    user_id: req.session.user,
    title: req.body.title,
    date: req.body.date,
    content: req.body.content,
  };
  models.Memo.create(object).then((result) => {
    // console.log(result);
    res.send("메모 작성");
  });
};

// 메모 수정
exports.post_modifymemo = (req, res) => {
  // 제목, 날짜, html화 된 내용,
  let info = {
    id: req.body.id,
    title: req.body.title,
    date: req.body.date,
    content: req.body.content,
  };
  models.Memo.update(info, { where: { id: req.body.id } }).then((result) => {
    res.send("수정 성공");
  });
};

// 메모 삭제 기능
exports.post_deletememo = (req, res) => {
  let id = req.body.id;
  models.Memo.destroy({ where: { id: id } }).then((result) => {
    res.send("삭제 성공");
  });
};

// 대시보드 페이지 렌더링
// 로그인 시 회원의 정보 대시보드 페이지에 넣어줘야 함
exports.get_dashboard = (req, res) => {
  if (!req.session.user) {
    res.redirect("/");
  } else {
    res.render("dashboard");
  }
};

// 대시보드 페이지 렌더링시 axios를 통해 보내지는 데이터들
// 임시 데이터 json 형태로 작성
exports.get_dashboard_data = (req, res) => {
  models.Memo.findAll({
    where: { user_id: req.session.user },
    order: [["date", "ASC"]],
  }).then((memo) => {
    res.send({ memo });
  });
};

// 달력
exports.get_calendar = (req, res) => {
  if (!req.session.user) res.redirect("/");
  else res.render("calendar.ejs");
};

// 달력 페이지에서 모달을 띄울 때 메모들을 불러오는 함수 입니다.
exports.post_calendar_modal_data = (req, res) => {
  // where절로 사용할 날짜
  let day = req.body.day;
  models.Memo.findAll({ where: { user_id: req.session.user, date: day } }).then(
    (memo) => {
      res.send({ memo });
    }
  );
};

exports.post_calendar_calendar_data = (req, res) => {
  // where절로 사용할 데이터
  let user_id = req.session.user;
  let start_day = req.body.start_day;
  let end_day = req.body.end_day;

  models.Memo.findAll({
    where: { user_id: user_id, date: { [Op.between]: [start_day, end_day] } },
  }).then((memo) => {
    console.log(memo);
    res.send({ memo });
  });
};

// exports.get_home = (req, res) => {
//   if ( req.session.user == null ) { this.get_login( req, res ) }
//   else {
//     const memo = models.Memo.findAll();
//     res.render('main',{data:memo});
//   }
//   function get_login(req,res) {
//     res.render('home');
//   }
// }
