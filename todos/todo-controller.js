//controller for todo list items

import * as todoDao from "./todo-dao.js";

let todoItems = [
    {title: 'CS5610', date: '2020-09-01', completed: true},
    {title: 'CS3200', date: '2020-08-01', completed: false},
    {title: 'CS5200', date: '2020-07-01', completed: false},
]

export const getTodos = () => todoItems;

const TodoController = (app) => {

    const createTodo = async (req, res) => { //create a new to-do item
        const todo = req.body
        todo["_id"] = (new Date()).getTime() + '' //create a unique id for the new to-do item
        todo.completed = false;

        // todoItems.push(todo)

        //respond with the new to-do item
        const insertedTodo = await todoDao.createTodo(todo);
        res.send(insertedTodo);

        // res.send(todo)
    }

    const findAllTodos = async (req, res) => {
        //retrieve all to-do items
        const todos = await todoDao.findTodos(); //retrieve all to-do items from database
        res.json(todos);

        // console.log("todos", todos)
        // res.send(todos);
    }

    const updateTodo = async (req, res) => {
        //retrieve the to-do item to be updated
        const tid = req.params['tid']

        const todoUpdates = req.body

        //status returned from database
        const status = await todoDao.updateTodo(tid, todoUpdates);
        // respond with status object
        res.json(status);

        // const todoIndex = todoItems.findIndex(
        //     (todo) => todo._id === tid)
        // todoItems[todoIndex] = {
        //     ...todoItems[todoIndex],
        //     ...todoUpdates
        // }
        // res.send(200)
    }

    const deleteTodo = async (req, res) => { //delete a to-do item
        //retrieve the ID of the to-do item we want to remove
        const tid = req.params['tid']
        //status reports success or failure
        const status = await todoDao.deleteTodo(tid); //to delete record from database
        res.json(status) // status reports success or failure

        // //filter out the to-do item from the to-do items array
        // todoItems = todoItems.filter(
        //     (todo) => todo._id !== tid)
        // res.sendStatus(200)
    }

    app.post('/api/todos', createTodo)
    app.get('/api/todos', findAllTodos)
    app.put('/api/todos/:tid', updateTodo)
    app.delete('/api/todos/:tid', deleteTodo)

}
export default TodoController;


//NOTE: Once we have defined a function as an asynchronous function,
// we are able to use the await keyword. This keyword is placed before
// the calling of a promise, which will pause the execution of the function
// until the promise is either fulfilled or rejected.
