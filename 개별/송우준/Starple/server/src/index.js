const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const DB = require("./models");

const app = express();
DB();

/* env */
const mode = "dev";
// const mode = "prod";
// 서버에 업로드할 때 const mode = "prod"
console.log("mode : ", mode);
require("dotenv").config({
  path: path.join(__dirname, "./config/" + mode + ".env"),
});
const config = require("./config/default");
const port = config.port || 8000;
const clientUrl = config.client;
// const redCon = config.redis;
console.log(process.env.FRONT_URL);

//* middlewares */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser(config.COOKIE_SECRET));

/* Redis */
// const redis = require('redis');
// const redisClient = redis.createClient({
//     url: `redis://${redCon.REDIS_USERNAME}:${redCon.REDIS_PASSWORD}@${redCon.REDIS_HOST}:${redCon.REDIS_PORT}/0`,
//     legacyMode: true,
// });
// redisClient.on('connect', () => { console.info('Redis Connected'); });
// redisClient.on('error', (err) => { console.error('Redis Client ERROR', err); });
// redisClient.connect().then(); // redis v4 연결 (비동기)
// const redisCli = redisClient.v4; // redisClient객체(v4버젼) 프로미스 기반

// const RedisStore = require('connect-redis')(session);
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: config.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    // store: new RedisStore({ client: redisClient, prefix: 'session:' })
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  console.log("router");
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

//* routes */
app.use("/api", require("./routes/api"));
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

app.use((req, res, next) => {
  res.send(`${req.method} ${req.url} 라우터가 없습니다.`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ msg: err.message });
});

app.listen(port, () => {
  console.log(`Server start! port : ${port}`);
});
