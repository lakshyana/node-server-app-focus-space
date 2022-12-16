import mongoose from "mongoose";

const musicSchema = mongoose.Schema({
    title: {type: String, required: true},
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    dislikes: Number,
    rating: String,
    genre: {type: String, enum: ['LOFI', 'INTRUMENTAL', 'CLASSICAL']}
}, {collection: 'media'})

export default musicSchema
