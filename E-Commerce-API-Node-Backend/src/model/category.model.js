const mongoose = require("mongoose");

// category Schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    level: {
        type: Number,
        required: true,
    },
});

// table for this schema
const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
