
const Rating = require('../model/rating.model.js');
const productService = require('../services/product.service.js');

async function createRating(reqData, user) {
    let product = await productService.findProductById(reqData.productId);

    const rating = new Rating({
        rating: reqData.rating,
        user: user._id,
        createdAt: new Date(),
        product:product._id
    })

    await rating.save();
    return rating;
}

async function gettAllRating(productId) {
    let product = await productService.findProductById(productId);
    const allRating = await Rating.find({product: product._id})

    return allRating;
}

module.exports = { createRating, gettAllRating }