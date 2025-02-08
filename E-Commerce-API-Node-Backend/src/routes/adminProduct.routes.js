const express = require("express")
const router = express.Router();
const authenticate = require("../middleware/authenticate")
const produntController = require("../controller/product.controller.js")

router.post("/", authenticate , produntController.createProduct);
router.post("/creates", authenticate , produntController.createMultipleProduct);
router.delete("/:id", authenticate , produntController.deleteProduct);
router.put("/:id", authenticate , produntController.updateProduct);

module.exports = router;