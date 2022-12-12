const User = require("../models/User");
const jwt = require("jsonwebtoken");
const secret = require("../default").secretOrKey;

exports.createUser = async (req, res) => {
  const { userID, username, email, hashedPW } = req.body;

  try {
    // email을 비교하여 user가 이미 존재하는지 확인
    let user = await User.findOne({ userID });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    //user에 name, email, password 값 할당
    user = new User({ userID, username, email, hashedPW });
    /*
        @payload token으로 변환할 데이터 
        @jwtSecret secret key 값
        @expiresIn 유효시간
         */
    jwt.sign(payload, secret, { expiresIn: "15m" }, (err, token) => {
      if (err) throw err;
      res.send({ token });
    });
  } catch {
    console.error(error.message);
    res.status(500).send("server Error");
  }
};
