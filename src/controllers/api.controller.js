const { Router } = require('express');
const ErrorResponse = require('../classes/error-response');
const { asyncHandler, syncHandler } = require('../middlewares/middlewares');
const { initDB, getTodos, closeDB, CreateToDo } = require('../db_connect');

const router = Router();

function initRoutes() {
    router.get('/api/todos', asyncHandler(getToDos));
    router.get('/api/todos/:id', asyncHandler(getToDoById));
    router.post('/api/todos', asyncHandler(createToDo));
    router.delete('/api/todos', asyncHandler(deleteToDo));
    router.delete('/api/todos/:id', asyncHandler(deleteToDoById));
    router.patch('/api/todos/:id', asyncHandler(patchToDo));
}


async function getToDos(req, res, next) {
    res.status(200).json({ getTodos });
}
async function getToDoById(req, res, next) {
    res.status(200).json({ message: 'This is test )' });
}
async function createToDo(req, res, next) {
    res.status(200).json({ message: 'This is test )' });
}
async function deleteToDo(req, res, next) {
    res.status(200).json({ message: 'This is test )' });
}
async function deleteToDoById(req, res, next) {
    res.status(200).json({ message: 'This is test )' });
}
async function patchToDo(req, res, next) {
    res.status(200).json({ message: 'This is test )' });
}

initRoutes();

module.exports = router;