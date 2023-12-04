const router = require("express").Router();

router.post("/", async (req, res, next) => {
  try {
    const { qrURL } = req.body;
    if (!qrUrl) throw new Error("qrUrl is required.");
    const result = await mailService.mailer(qrUrl);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
