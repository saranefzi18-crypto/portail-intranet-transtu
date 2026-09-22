const router = require("express").Router();
const auth = require("./authMiddleware");
const appCtrl = require("./applicationController");
const docCtrl = require("./documentController");

router.use(auth);

router.get("/apps/list", appCtrl.getAll);

router.post("/apps", appCtrl.create);
router.put("/apps/:id", appCtrl.update);
router.patch("/apps/:id/status", appCtrl.changeStatus);

router.post("/apps/:id/docs", docCtrl.create);
router.put("/docs/:docId", docCtrl.update);
router.delete("/docs/:docId", docCtrl.remove);

module.exports = router;