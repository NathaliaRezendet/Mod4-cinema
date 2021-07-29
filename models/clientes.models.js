const create = require('../infra/create')

class Clientes {
    adiciona(cliente) {
        const sql = 'INSERT INTO Clientes SET ?'

        create.query(sql, cliente, (erro) => {
            if(erro){
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new Clientes