import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    music: {type: String, ref: 'MusicModel'},
}, {collection: 'likes'})
export default likesSchema
