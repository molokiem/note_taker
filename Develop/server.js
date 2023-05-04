const express = require("express");
const api_routes = require("./routes/api_routes");
const view_routes = require("./routes/view_routes");
const PORT = process.env.PORT || 3000;
// const fs = require("fs");
// const router = require("express").Router();

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api_routes);
app.use("/", view_routes);

app.listen(PORT, () => console.log("Server running on %s", PORT));
