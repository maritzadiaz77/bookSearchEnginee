const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
