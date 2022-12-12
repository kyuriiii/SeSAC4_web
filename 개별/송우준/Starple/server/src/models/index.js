const mongoose = require("mongoose");

const config = require("../config/default");

const connect = () => {
  mongoose.connect(
    config.db.MONGO_URI,
    {
      dbName: "starplanet",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.log('"DB ERROR', error);
      } else {
        console.log("DB Connected");
      }
    }
  );
};

mongoose.connection.on("disconnected", () => {
  console.error('"DB Disconnected, Reconnecting...');
  connect();
});

module.exports = connect;
