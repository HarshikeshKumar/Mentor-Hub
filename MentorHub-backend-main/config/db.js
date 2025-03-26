const mongoose = require("mongoose");

const config = require(".");

mongoose.set("strictQuery", true);

mongoose
  .connect(config.DB_URL)
  .then(() => {
    console.log("Mongoose connection done");
  })
  .catch((e) => {
    console.log("Mongoose connection error");
    console.error(e);
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose default connection open to " + config.DB_URL);
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", () => {
  process.exit(0);
});

module.exports = mongoose.connection;
