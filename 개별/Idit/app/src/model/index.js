const Sequelize = require("sequelize");
const session = require("express-session");
const app = require("../../index");
const config = require("../config/config.js")["development"];
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const sessionStore = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval: 15 * 60 * 1000,
  expiration: 24 * 60 * 60 * 60 * 1000
});

app.use(
  session({
    secret: 'secretKey',
    store: sessionStore,
    resave: false,
    saveUninitialized: true
  })
);

sessionStore.sync({ force: false });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User")(sequelize, Sequelize);
db.Memo = require("./Memo")(sequelize, Sequelize);

db.User.hasMany(db.Memo, {
  foreignKey: "user_id",
  sourceKey: "id",
  onDelete: "cascade",
  onUpdate: "cascade"
});

db.Memo.belongsTo(db.User, {
  foreignKey: "user_id",
  sourceKey: "id",
  onDelete: "cascade",
  onUpdate: "cascade"
});

module.exports = db;
