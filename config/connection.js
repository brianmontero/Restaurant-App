const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'restaurant'
});

mysqlConnection.connect((err) => {
    if (err) {
        console.error('Error en la conexión de BDD', err);
    }
    else {
        console.log('BDD conectada');
    }
});

module.exports = mysqlConnection;