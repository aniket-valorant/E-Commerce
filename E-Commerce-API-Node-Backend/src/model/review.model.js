const mongoose = require("mongoose");

// revies Schema
const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

// table for this schema
const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;