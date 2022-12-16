import musicModel from "./music-model.js";

export const findAllMusics = async () => {
    const music = await musicModel.find()
    return music
}
export const createMusic = async (movie) => {
    const actualInsertedMusic = await musicModel.create(movie)
    return actualInsertedMusic
}
export const deleteMusic = async (mid) => {
    const status = await musicModel.deleteOne({_id: mid})
    return status
}
export const updateMusic = () => {}
