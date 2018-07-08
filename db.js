var mysql = require("mysql");

function login() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 8889,
        password: 'root',
        database: 'products',
        multipleStatemants: true
    });

    return connection;

}

module.exports = {
    login: login

};