const express = require("express");
const api_routes = require("./routes/api_routes");
const PORT = process.env.PORT || 3002;
// const fs = require("fs");
// const router = require("express").Router();

const app = express();

app.listen(PORT, () => console.log("Server running on %s", PORT));
