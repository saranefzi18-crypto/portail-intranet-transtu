const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./publicRoutes"));
app.use("/api/admin", require("./adminRoutes"));
app.use("/api/auth", require("./authRoutes"));

module.exports = app;