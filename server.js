const http = require("http");
const path = require("path");
const express = require("express");
const connecToDB = require("./config/db");
const router = require("./api/user/app.router");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
var multer = require("multer");
var cors = require("cors");

connecToDB();
const app = express();

// For Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build ", "index.html"));
  });
}

const port = process.env.PORT || 4000;
const server = http.createServer(app);

// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
  // Mentioning content types
  //res.setHeader("Content-Type", "application/json; charset=UTF-8");
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "content-type,Authorization");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage }).single("file");
app.post("/upload", async function (req, res) {
  await upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});
app.use("/api/user", router);

server.listen(port, console.log(`Server running on port ${port}`));
