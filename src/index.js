const express = require('express');
const http = require('http');
const cors = require('cors');

const userRouter = require('./controllers/user.controller');
const todoRouter = require('./controllers/todo.controller');
const{initDB}= require('./database/index')
const { logger, errorHandler } = require('./middlewares/middlewares')


const app = express();
//initDB();
initDB();

app.use(cors());
app.use(express.json());
app.use(logger);
app.get('/me', (req, res) => {
    res.status(200).json({ message: 'All is ok!' });
});
app.use(userRouter);
app.use(todoRouter);

app.use(errorHandler);

http.createServer(app).listen(9000, () => {
    console.log('Server is working on port 9000');

})
