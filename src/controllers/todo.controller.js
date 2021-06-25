const { Router } = require('express');
const ErrorResponse = require('../classes/error-response');
const { asyncHandler } = require('../middlewares/middlewares');
const ToDo = require('../database/models/ToDo');

const todoRouter = Router();

function initRoutes() {
    todoRouter.get('/api/todos', asyncHandler(getToDos));
    todoRouter.get('/api/todos/:id', asyncHandler(getToDoById));
    todoRouter.post('/api/todos', asyncHandler(create));
    todoRouter.delete('/api/todos', asyncHandler(deleteToDo));
    todoRouter.delete('/api/todos/:id', asyncHandler(deleteToDoById));
    todoRouter.patch('/api/todos/:id', asyncHandler(patchToDo));
}


async function getToDos(req, res, next) {
    let where = {
        userId: req.query.userId
    }
    console.log("QUERY:%j",req.query);
    if (typeof req.query.isComplete === "string") {

        where.isComplete = (req.query.isComplete === 'true');
    }
    const todos = await ToDo.findAll({
       where
    });
    res.status(200).json({ todos });
}
async function getToDoById(req, res, next) {
    const result = await ToDo.findByPk(req.params.id);
    res.status(200).json(result);
}
async function create(req, res, next) {
    const result = await ToDo.create(req.body);
    res.status(200).json(result);
}
async function deleteToDo(req, res, next) {
    await ToDo.destroy({
        where: {
            userId: req.query.userId
        }
    });
    res.status(200).json({ message: 'all is doomed!' });
}
async function deleteToDoById(req, res, next) {
    const result = await ToDo.findByPk(req.params.id);
    if (!result) throw new ErrorResponse('No todo found', 404);
    await result.destroy();
    res.status(200).json(result);
}
async function patchToDo(req, res, next) {
    await ToDo.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    todo = await ToDo.findByPk(req.params.id);
    res.status(200).json(todo);
}

initRoutes();

module.exports = todoRouter; 