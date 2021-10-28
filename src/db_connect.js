const mysql = require("mysql2/promise");

const sqlConfig = {
    host: "localhost",
    user: "root",
    database: "todos",
    password: "jghcn2001"
};

const getTodos = async () => {
    const connection = await mysql.createConnection(sqlConfig);
    const [rows] = await connection.execute("SELECT * FROM todo");
    console.log("sql result rows:", rows);
    await connection.end();
    return rows;
}

const getTodoById = async (id = 0) => {
    const connection = await mysql.createConnection(sqlConfig);
    const [rows] = await connection.execute(`SELECT * FROM todo WHERE id = ${id} `);
    console.log("sql result rows:", rows);
    await connection.end();
    return rows;
}
const createToDo = async (data) => {
    const connection = await mysql.createConnection(sqlConfig);
    const [rows] = await connection.query("INSERT todo (title) VALUES (?)", data.title);
    console.log("sql result rows:", rows);
    const [result] = await connection.execute(`SELECT * FROM todo WHERE id = ${rows.insertId} `);
    await connection.end();
    return result;
}
const deleteTodo = async () => {
    const connection = await mysql.createConnection(sqlConfig);
    const [rows] = await connection.execute(`DELETE FROM todo`);
    console.log("sql result rows:", rows);
    await connection.end();
    return rows;
}
const deleteTodoById = async (id = 0) => {
    const connection = await mysql.createConnection(sqlConfig);
    const [rows] = await connection.execute(`DELETE FROM todo WHERE id=${id}`);
    console.log("sql result rows:", rows);
    await connection.end();
    return rows;
}

const changeTheFlag = async (id, isComplete = 0) => {
    const connection = await mysql.createConnection(sqlConfig);
    const [rows] = await connection.execute(`UPDATE todo SET isComplete=${isComplete} WHERE id=${id}`);
    console.log("sql result rows:", rows);
    const [result] = await connection.execute(`SELECT * FROM todo WHERE id = ${rows.insertId} `);
    await connection.end();
    return rows;
}



module.exports = {

    getTodoById,
    deleteTodo,
    createToDo,
    getTodos,
    deleteTodoById,
    changeTheFlag
}