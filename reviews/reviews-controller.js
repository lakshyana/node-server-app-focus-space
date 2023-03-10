import * as dao from "./reviews-dao.js"
import {findReviewsByAuthor, findReviewsByMusic, findAllReviews} from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        const actualReview = await dao.createReview(review)
        res.json(actualReview)
    }
    const findReviewsByMusic = async (req, res) => {
        const mid = req.params.mid
        const reviews = await dao.findReviewsByMusic(mid)
        res.json(reviews)
    }
    const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author
        const reviews = await dao.findReviewsByAuthor(author)
        res.json(reviews)
    }

    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews()
        res.json(reviews)
    }

    app.get("/reviews/all", findAllReviews)
    app.post('/reviews', createReview)
    app.get('/:mid/reviews', findReviewsByMusic)
    app.get('/users/:author/reviews', findReviewsByAuthor)
}
export default ReviewsController
