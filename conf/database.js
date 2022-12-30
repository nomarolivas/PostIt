const mysql= require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root", 
    password: "Nomar1964!",
    database: 'postItDB',
    queueLimit: 0,
    connectionLimit: 20,
    waitForConnections: true
});

const promisePool= pool.promise();
    
module.exports = promisePool;