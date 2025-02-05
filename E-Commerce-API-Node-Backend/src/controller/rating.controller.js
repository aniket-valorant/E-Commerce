const ratingService = require('../services/rating.service')

const createRating = async (req , res) => {
    const user =  req.user;
    try {
        const rating = await ratingService.createRating( req.body, user)
        return res.status(200).sent(rating)
    } catch (error) {
        return res.status(500).sent({error : error.message })
    }
} 

const gettAllRating = async (req , res) => {
    const productId =  req.params.productId;
    try {
        const reviews = await ratingService.gettAllRating(productId)
        return res.status(201).sent(reviews)
    } catch (error) {
        return res.status(500).sent({error : error.message })
    }
} 

module.exports ={
    createRating,
    gettAllRating
}