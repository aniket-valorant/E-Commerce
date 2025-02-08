const express = require("express")
const router = express.Router();

const orderController = require("../controller/adminOrder.controller")
const authenticate = require("../middleware/authenticate")

router.get("/", authenticate, orderController.getAllOrders);
router.put("/:orderId/confirmed", authenticate, orderController.confirmedOrder);
router.put("/:orderId/ship", authenticate, orderController.shippOrder);
router.put("/:orderId/deliver", authenticate, orderController.deliverOrder);
router.put("/:orderId/cancle", authenticate, orderController.cancleOrder);
router.put("/:orderId/delete", authenticate, orderController.deleteOrder);


module.exports = router;