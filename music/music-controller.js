import * as musicDao from './music-dao.js'

export const getMusic = () => music;

const MusicController = (app) => {

    const createMusic   = async (req, res) => {
        const musicDao = req.body
        // musicDao["_id"] = (new Date()).getTime() + ''
        // musicDao["likes"] = 0
        // musicDao["liked"] = false
        // music.push(musicDao)
        const actualMusic = await musicDao.createMusic(musicDao)
        res.send(actualMusic)
    }
    const findAllmusic = async (req, res) => {
        const musicInDatabase = await musicDao.findAllmusic()
        res.send(musicInDatabase)
    }
    const updateMusic   = (req, res) => {
        const mid = req.params['mid']
        const musicUpdates = req.body
        const musicIndex = music.findIndex(
            (m) => m._id === mid)
        music[musicIndex] = {
            ...music[musicIndex],
            ...musicUpdates
        }
        res.send(200)
    }
    const deleteMusic   = async (req, res) => {
        const mid = req.params['mid']
        const status = await musicDao.deleteMusic(mid)
        // music = music.filter(
        //     (m) => m._id !== mid)
        res.send(status)
    }

    app.post  ('/media', createMusic)
    app.get   ('/media', findAllmusic)
    app.put   ('/media/:mid', updateMusic)
    app.delete('/media/:mid', deleteMusic)
}

export default MusicController;
