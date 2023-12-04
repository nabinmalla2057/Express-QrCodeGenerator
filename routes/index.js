const router = require("express").Router();

const apiRouter = require("./route.api");
const uiRouter = require("./route.controller");

router.use("/api/v1", apiRouter);
router.use("/", uiRouter);

module.exports = router;
