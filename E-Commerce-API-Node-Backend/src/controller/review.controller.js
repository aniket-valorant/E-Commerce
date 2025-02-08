const reviewService = require('../services/review.service')

const createReview = async (req , res) => {
    const user =  req.user;
    try {
        const review = await reviewService.createReview(req.body, user)
        return res.status(201).sent(review)
    } catch (error) {
        return res.status(500).sent({error : error.message })
    }
} 


async function gettAllReview (req , res) {
    const productId =  req.params.productId;
    try {
        const reviews = await reviewService.gettAllReview(productId)
        return res.status(201).sent(reviews)
    } catch (error) {
        return res.status(500).sent({error : error.message })
    }
} 

module.exports ={
    gettAllReview,
    createReview
}