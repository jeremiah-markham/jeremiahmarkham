var express = require("express");
var cors = require("cors");
var indexRouter = require("./routes/index");
var studentsRouter = require("./routes/students");
var zipRouter = require("./routes/zip");

var app = express();

const cor = cors({
  origin: function (origin, callback) {
    callback(null, true);
  },
  credentials: true,
});
app.use(cor);
app.options("*", cor);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
var mysql = require("mysql");
app.use(function (req, res, next) {
  res.locals.connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student",
  });
  res.locals.connection.connect();
  next();
});

app.use("/api/", indexRouter);
app.use("/api/students", studentsRouter);
app.use("/api/zip", zipRouter);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;
