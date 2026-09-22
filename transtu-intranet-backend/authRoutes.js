const router = require("express").Router();
const auth = require("./authController");

router.post("/login", auth.login);
router.post("/create", auth.create);

module.exports = router;