//Retrieving data from Mongo with Mongoose
import todoModel from './todo-model.js';

export const findTodos = () => todoModel.find();
export const createTodo = (todo) => todoModel.create(todo);
export const deleteTodo = (tid) => todoModel.deleteOne({_id: tid});
export const updateTodo = (tid, todo) => todoModel.updateOne({_id: tid },
    {$set: todo});
