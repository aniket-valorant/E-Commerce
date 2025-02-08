const express = require("express")
const router = express.Router();
const authenticate = require("../middleware/authenticate")
const ratingController = require("../controller/rating.controller.js")


router.post("/create", authenticate , ratingController.createRating);
router.get("/product/:productId", authenticate , ratingController.gettAllRating);


module.exports = router;