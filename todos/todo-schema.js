//create mongoose schema for todo list
//
//load the mongoose library
import mongoose from 'mongoose';

//create the schema
const schema = mongoose.Schema({
    _id: {type: String}, // id property of type String
    title: String,
    date: String,
    completed: Boolean,
}, {collection: 'todos'}); //collection name where todos are stored in todos database
export default schema; //export schema so it can be used elsewhere
