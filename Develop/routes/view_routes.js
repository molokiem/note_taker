const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/notes.html"));
});

module.exports = router;
