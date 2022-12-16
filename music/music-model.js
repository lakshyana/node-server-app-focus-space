import mongoose from "mongoose";
import musicSchema from "./music-schema.js";

const musicModel = mongoose.model('MovieModel', musicSchema)

export default musicModel
