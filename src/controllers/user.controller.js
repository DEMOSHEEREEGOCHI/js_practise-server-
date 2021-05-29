const { Router } = require('express');
const ErrorResponse = require('../classes/error-response');
const { asyncHandler } = require('../middlewares/middlewares');
const User = require('../database/models/User')

const userRouter = Router();

function initRoutes() {
    userRouter.post('api/user/registration', asyncHandler(registrateUser));
    userRouter.post('api/user/login', asyncHandler(logInUser));
}



async function registrateUser(req, res, next) {
    if (req.body.username==null)throw new ErrorResponse('username is empty!',400);
    if (req.body.password==null)throw new ErrorResponse('password is empty!',400);
    
    const result = await User.create(req.body);
    
    res.status(200).json(result);
}

async function logInUser(req, res, next) {
    if (req.body.username==null)throw new ErrorResponse('enter an username',400);
    if (req.body.password==null)throw new ErrorResponse('enter password',400);
    
    const result = await User.findOne({where:{username:User.username}});
    if (result==null)throw new ErrorResponse('incorrect login!',400);
    res.status(200).json(result);
}


initRoutes();

module.exports = userRouter;