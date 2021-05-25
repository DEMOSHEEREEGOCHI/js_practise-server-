const express = require('express');
const http = require('http');
const cors = require('cors');
const { response } = require('express');
const testRouter = require('./controllers/test.controller');
//const connection = require('db_connect.js');

const app = express();
app.use(cors());






app.use((req, res, next) => {


    console.log('URL = ' + req.url);
    console.log('METHOD = ' + req.method);
    console.log('HOST = ' + req.headers.host);
    console.log('IsSecure =' + req.secure);
    console.log('Query = ' + req.query);
    console.log('Body = ' + req.body);

    next();
})


app.get('/me', (req, res) => {
    res.status(200).json({ message: 'All is ok!' });
})

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
})
app.delete('/deletetodo', (req, res) => {
    deleteToDo(todoCount - 1);
    res.status(200).json("delete to do success");
})
app.use('/test', testRouter);

http.createServer(app).listen(3000, () => {
    console.log('Server is working on port 3000');
    console.log(todoCount);
})

//db.connect;
//db.end;