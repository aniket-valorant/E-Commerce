const mongoose = require("mongoose");

// rating Schema
const ratingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

// table for this schema
const Rating = mongoose.model("ratings", ratingSchema);

module.exports = Rating;