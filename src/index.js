const express = require('express');
const http = require('http');
const cors = require('cors');

const router = require('./controllers/api.controller');

const { logger, errorHandler } = require('./middlewares/middlewares')

//initDB();


//CreateToDo('32');
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.get('/me', (req, res) => {
    res.status(200).json({ message: 'All is ok!' });
});
app.use(router);
app.use(errorHandler);
/*
let todoList = [];
var todoCount = 0;

function upToDo(index) {
    let todo = {
        id: index,
        title: 'Title =' + index,
        descr: `Descr ${index}`
    }
    todoList.push(todo);
    todoCount += 1;
}

function deleteToDo(index) {
    todoList.splice(index);
    todoCount -= 1;
}

for (let index = 0; index < 10; index++) {
    upToDo(index);
}

app.get(`/todoList`, (req, res) => {
    res.status(200).json({ todoList });
})

app.post('/addtodo', (req, res) => {
    upToDo(todoCount);
    res.status(200).json("add to do success");
});
app.delete('/deletetodo', (req, res) => {
    deleteToDo(todoCount - 1);
    res.status(200).json("delete to do success");
});
app.use('/test', testRouter);
*/
http.createServer(app).listen(9000, () => {
    console.log('Server is working on port 3000');

})