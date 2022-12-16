import {getMusic} from "../music/music-controller.js";
import users from "../users/users.js";
import * as likesDao from "./likes-dao.js";

let likes = [
    {_id: '123', user: '111', music: '123'},
    {_id: '234', user: '111', music: '234'},
    {_id: '345', user: '222', music: '345'},
    {_id: '456', user: '333', music: '345'},
]

const LikesController = (app) => {
    const populate = (
        {
            rawResults, fieldToPopulate,
            sourceData, sourceField
        }) => {
        const populatedResults = rawResults.map((raw) => {
            const source = sourceData.find(source => source[sourceField] === raw[fieldToPopulate])
            return ({
                ...raw,
                [fieldToPopulate]: source
            })
        })
        return populatedResults
    }
    const userLikesMusic = async (req, res) => {
        // const uid = req.params.uid
        const uid = req.session['currentUser']._id
        const mid = req.params.mid

        const newLike = await likesDao.userLikesMusic(uid, mid)
        // likes.push(newLike)
        res.json(newLike)
    }
    const userUnlikesMusic = async (req, res) => {
        // const uid = req.params.uid
        // const mid = req.params.mid

        const {uid, mid} = req.params

        const status = await likesDao.userUnlikesMusic(uid, mid)

        // likes = likes.filter((l) => l.user !== uid && l.music !== mid)
        res.send(status)
    }
    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes()
        res.json(likes)
    }
    const findMusicLikedByUser = async (req, res) => {
        const uid = req.params.uid
        const music = await likesDao.findMusicLikedByUser(uid)
        res.json(music)
        // const music = likes.filter((like) => like.user === uid)
        // const populatedMusic = populate({
        //     rawResults: music,
        //     fieldToPopulate: 'music',
        //     sourceData: getMusic(),
        //     sourceField: '_id'
        // })
        // res.json(populatedMusic)
    }
    const findUsersWhoLikedMusic = async (req, res) => {
        const mid = req.params.mid
        const users = await likesDao.findUsersThatLikeMusic(mid)
        res.json(users)

        // const usersWhoLikeMusic = likes.filter((like) => like.music === mid)
        // const populateUsers = populate({
        //     rawResults: usersWhoLikeMusic,
        //     fieldToPopulate: 'user',
        //     sourceData: users,
        //     sourceField: '_id'
        // })
        // res.json(populateUsers)
    }

    app.post('/users/likes/:mid', userLikesMusic)
    app.delete('/users/unlikes/:mid', userUnlikesMusic)
    app.get('/likes', findAllLikes)
    app.get('/users/:uid/likes', findMusicLikedByUser)
    app.get('/music/:mid/likes', findUsersWhoLikedMusic)
    // app.put(updateLike)
}

export default LikesController;
