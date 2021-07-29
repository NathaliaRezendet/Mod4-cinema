const create = require('../infra/create')

class Clientes {
    adiciona(cliente, res) {
        const resposta = cliente.nome.lenght >= 5

        const validacoes = [
            {
                nome: 'nome',
                valido: resposta,
                mensagem: 'O nome não consta no nosso banco de dados'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)

        const existemErros = erros.lenght
        if(existemErros) {
            res.status(400).json(erros)
        } else {
            
        }
        const sql = 'INSERT INTO Clientes SET ?'

        create.query(sql, cliente, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(201).json(cliente)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM Clientes'

        create.query(sql, (erro, resultados)=> {
            if (erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({resultados})
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Clientes WHERE id=${id}`

        create.query(sql, (erro, resultados) => {
            const client = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(client)
            }
        })
    }

    altera(id, valores, res) {
        const sql = 'UPDATE Clientes SET ? WHERE id=?'

        create.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Clientes WHERE id=?'

        create.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Clientes