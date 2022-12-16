import express from 'express';
import cors from 'cors';
// CORS stands for Cross Origin Resource Sharing and establishes the rules by which resources
// can be shared across domains (origins)
import session from 'express-session';
// Session middleware for Express

//import controllers
import UsersController from "./users/users-controller.js";
import SessionController from "./session-controller.js";
import TodoController from "./todos/todo-controller.js";
import FollowsController from "./follows/follows-controller.js";
import LikesController from "./likes/likes-controller.js";
import MusicController from "./music/music-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";

// load the mongoose library
import mongoose from "mongoose";


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

// connect to the todos database
const CONNECTION_STRING =  'mongodb://127.0.0.1:27017/final-project';
// process.env.DB_CONNECTION_STRING_PROJECT ||

mongoose.connect(CONNECTION_STRING, options)


const app = express();
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000'
    }
))

app.use(session({
    secret: 'SECRET_KEY',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome Final Project! Try /api/todos to check todo api')
});

//to-do controller
TodoController(app);
UsersController(app);
FollowsController(app);
LikesController(app);
ReviewsController(app);
MusicController(app);


// handling requests from controller
app.listen(  4000);  //process.env.PORT || 4000

