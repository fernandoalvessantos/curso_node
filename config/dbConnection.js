var mysql = require('mysql');

var connMysql = function(){
    console.log("Conexao com banco estabelecida")
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}
module.exports = function () {
    console.log("Autoload carregou modulo de conexao com o banco")
    return connMysql;
}