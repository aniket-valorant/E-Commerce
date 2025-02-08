const mongoose = require("mongoose");

// Address Schema
const addressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipcode: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
});

// table for this schema
const Address = mongoose.model("addresses", addressSchema);

module.exports = Address;
