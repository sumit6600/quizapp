require("dotenv").config();
const mongoose = require("mongoose");
const Url =
  "mongodb+srv://quizapp:quizapp@cluster0.bqpad2s.mongodb.net/?retryWrites=true&w=majority";
function connectDb() {
  mongoose.Promise = global.Promise;
  mongoose.connect(Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  const con = mongoose.connection;
  con.on("open", () => {
    console.log("database connected in mongo atlas (#cloud)");
  });
}

module.exports = connectDb;
