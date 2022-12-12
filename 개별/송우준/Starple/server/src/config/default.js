module.exports = {
  port: 8000,
  client: process.env.FRONT_URL, //[프로젝트]-[실행 URL과 포트]에서 설정하신 client domain을 넣어주세요!
  db: {
    // "mongodb+srv://starplanet:12340987@starplanet.i5qsztg.mongodb.net/?retryWrites=true&w=majority",
    MONGO_URI:
      "mongodb+srv://starplanet:f8qz9bLRfdEvT2S5@starplanet.i5qsztg.mongodb.net/?retryWrites=true&w=majority",
  },
  redis: {
    REDIS_HOST: "redis-15601.c15.us-east-1-4.ec2.cloud.redislabs.com",
    REDIS_PORT: 15601,
    REDIS_USERNAME: "default",
    REDIS_PASSWORD: "grmoQtkOvvIZmNaeXQ8Krn3BTRAN5vmp",
  },
  COOKIE_SECRET: "apple",
  secretOrKey: "JWT-SECRET-KEY",
  googleOAuth: {
    clientID:
      "771871776314-ltf65vkdl7uqkmmrp4si1nt93h859pdv.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: process.env.BACK_URL + "/auth/google/callback",
  },
  kakaoOAuth: {
    clientID: "adeb39a802c3fcea5a92750470fc1654",
    callbackURL: process.env.BACK_URL + "/auth/kakao/callback",
  },
  naverOAuth: {
    clientID: "0RvcoZRNN7oNbU0APw_k",
    clientSecret: "mxeSP8ZQRD",
    callbackURL: process.env.BACK_URL + "/auth/naver/callback",
  },
};
