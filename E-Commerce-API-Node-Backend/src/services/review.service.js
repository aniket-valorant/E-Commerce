const Review = require('../model/review.model.js');
const productService = require('../services/product.service.js');

async function createReview(reqData, user) {
    let product = await productService.findProductById(reqData.productId);

    const review = new Review({
        review: reqData.review,
        user: user._id,
        createdAt: new Date(),
        product:product._id
    })

    await review.save();
    return review;
}

async function gettAllReview(productId) {
    let product = await productService.findProductById(productId);
    const allReview = await Review.find({product: product._id}).populate('user');

    return allReview;
}

module.exports = { createReview, gettAllReview }