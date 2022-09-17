const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];
const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);

module.exports = db;