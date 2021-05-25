const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "todos",
    password: "jghcn2001"
});


const initDB = () => {
    try {
        connection.connect();
        console.log("подключение успешно")
    } catch (error) {
        console.log("Ошибка: " + error.message);
        initDB();
    }
}
const getTodos = () => {
    try {
        connection.execute("SELECT * FROM todo",
            function(err, results, fields) {
                console.log(err);
                return results.toString; // собственно данные
                // console.log(fields); // мета-данные полей 
            });

    } catch (error) {
        console.log("Ошибка: " + error.message);
        initDB();
    }
}

const CreateToDo = (data) => {
    try {
        connection.query("INSERT todo (title) VALUES (?)", data,
            function(err, results, fields) {
                console.log(err);
                console.log(results); // собственно данные
                // console.log(fields); // мета-данные полей
            });
    } catch (error) {
        console.log("Ошибка: " + error.message);
        initDB();
    }
}





const closeDB = () => {
    try {
        connection.end(function(err) {
            if (err) {
                return console.log("Ошибка: " + err.message);
            }
            console.log("Подключение закрыто");
        });
    } catch (error) {
        console.log("Ошибка: " + error.message)
    }

}



module.exports = {

    initDB,
    closeDB,
    CreateToDo,
    getTodos,

}