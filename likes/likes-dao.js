import likesModel from "./likes-model.js";

export const userLikesMusic = async (uid, mid) => {
    return await likesModel.create({user: uid, music: mid})
}
export const userUnlikesMusic = async(uid, mid) => {
    return await likesModel.deleteOne({user: uid, music: mid})
}
export const findMusicLikedByUser = async(uid) => {
    return await likesModel
        .find({user: uid}, {user: false})
        .populate('music', 'title')
        .exec()
}
export const findUsersThatLikeMusic = async(mid) => {
    return await likesModel.find({music: mid}, {music: false})
        .populate('user', 'username')
        .exec()
}
export const findAllLikes = async () =>
    await likesModel.find()
