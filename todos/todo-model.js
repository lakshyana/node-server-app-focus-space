//Create mongoose model
//
//load mongoose library
import mongoose from 'mongoose';

//load todo schema
import todoSchema from './todo-schema.js'

//create mongoose model from the schema
const todoModel = mongoose
    .model('TodoModel', todoSchema);

export default todoModel;
//export so it can be used elsewhere
