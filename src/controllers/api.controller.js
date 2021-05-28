const { Router } = require('express');
const ErrorResponse = require('../classes/error-response');
const { asyncHandler } = require('../middlewares/middlewares');
const { getTodos, createToDo, getTodoById, deleteTodo, deleteTodoById, changeTheFlag } = require('../db_connect');

const router = Router();

function initRoutes() {
    router.get('/api/todos', asyncHandler(getToDos));
    router.get('/api/todos/:id', asyncHandler(getToDoById));
    router.post('/api/todos', asyncHandler(create));
    router.delete('/api/todos', asyncHandler(deleteToDo));
    router.delete('/api/todos/:id', asyncHandler(deleteToDoById));
    router.patch('/api/todos/:id', asyncHandler(patchToDo));
}


async function getToDos(req, res, next) {
    const result = await getTodos();
    res.status(200).json({ todos: result });
}
async function getToDoById(req, res, next) {
    const result = await getTodoById(req.params.id);
    res.status(200).json(result);
}
async function create(req, res, next) {
    const result = await createToDo(req.body);
    res.status(200).json(result);
}
async function deleteToDo(req, res, next) {
    await deleteTodo();
    res.status(200).json({ message: 'all is doomed!' });
}
async function deleteToDoById(req, res, next) {
    const result = await deleteTodoById(req.params.id);
    res.status(200).json({ message: 'ToDo has been eliminated!' });
}
async function patchToDo(req, res, next) {
    const result = await changeTheFlag(req.params.id, req.body.isComplete)
    res.status(200).json({ message: 'Updated!' });
}

initRoutes();

module.exports = router;