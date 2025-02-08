const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const authRouters = require("./routes/auth.routes.js");
const userRouters = require("./routes/user.routes.js");
const productRouter = require("./routes/product.routes.js");
const adminProductRouter = require("./routes/adminProduct.routes.js");
const cartRouter = require("./routes/cart.routes.js");
const cartItemRouter = require("./routes/cartItem.routes.js");
const orderRouter = require("./routes/order.routes.js");
const reviewRouter = require("./routes/review.routes.js");
const ratingRouter = require("./routes/rating.routes.js");
const adminOrderRouter = require("./routes/adminOrder.routes.js");

app.use("/auth", authRouters);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/products", productRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", userRouters);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);

app.get("/", (req, res) => {
  return res.send({ message: "welcome to ecommerce api - node", status: true });
});

module.exports = app;
