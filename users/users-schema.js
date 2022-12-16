import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: String,
    phone: String,
    firstName: {type: String, required: false },
    lastName: {type: String, required: false },
    role: {type: String, enum: ['REGULAR', 'PREMIUM'], default: 'REGULAR'},
    likedMusic: [{type: String, default:[]}],
    dislikedMusic: [{type: String, default:[]}],
}, {collection: 'users'})

export default usersSchema
