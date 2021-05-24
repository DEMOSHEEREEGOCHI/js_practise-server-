const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "todos",
    password: "jghcn2001"
});
connection.connect(function(err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

connection.execute("SELECT * FROM todo",
    function(err, results, fields) {
        console.log(err);
        console.log(results); // собственно данные
        // console.log(fields); // мета-данные полей 
    });

connection.execute("SELECT * FROM todo",
    function(err, results, fields) {
        console.log(err);
        console.log(results); // собственно данные
        // console.log(fields); // мета-данные полей 
    });
connection.end();
/*connection.end(function(err) {
if (err) {
    return console.log("Ошибка: " + err.message);
}
console.log("Подключение закрыто");
});*/

//export { connection };