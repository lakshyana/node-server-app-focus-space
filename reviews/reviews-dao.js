import reviewsModel from "./reviews-model.js";

export const findAllReviews = () => {
    return reviewsModel.find()
}

export const createReview = (review) => {
    reviewsModel.create(review)
}

export const findReviewsByMusic = (mid) => {
    reviewsModel.find({mid: mid})
        .populate('author')
        .exec()
    console.log("findReviewsByMusic")
    console.log(reviewsModel.find({mid: mid})
        .populate('author')
        .exec())

}



export const findReviewsByAuthor = (author) => {
    reviewsModel.find({author})

}
