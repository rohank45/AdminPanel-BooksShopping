require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/model/adminSchema");
const database = require("./server/config/database");
database.call();

const cors = require("cors");
app.use(cors());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const authRoute = require("./server/router/authRoute");
app.use("/", authRoute);

const dataRoute = require("./server/router/dataRoute");
app.use("/", dataRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server started...");
});
