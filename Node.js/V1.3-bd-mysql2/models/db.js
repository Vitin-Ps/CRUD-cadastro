const mysql = require('mysql2');
const conexao = mysql.createConnection({ // cria a conexão com o banco de dados
    host:'localhost',
    user: 'root',
    password: '',
    database: 'cadVendas'
});

module.exports = conexao; // prepara o código para que possa ser chamado em outro arquivo através do require
