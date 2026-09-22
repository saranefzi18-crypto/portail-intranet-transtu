const router = require("express").Router();
const ctrl = require("./applicationController");
const docCtrl = require("./documentController");

router.get("/apps", ctrl.getAllAct);
router.get("/apps/:id/docs", docCtrl.getDocsByApp);
router.get("/apps/:id", ctrl.getOne);


module.exports = router;