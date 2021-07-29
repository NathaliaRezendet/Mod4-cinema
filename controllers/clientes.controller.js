const Clientes = require('../models/clientes.models')

module.exports = app => {

    app.get('/clientes', (req, res) => {
        Clientes.lista(res)
    })

    app.get('/clientes/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Clientes.buscaPorId(id, res)
    })

    app.post('/clientes', (req, res) => {
        const clientes = req.body

        Clientes.adiciona(clientes, res)
    })

    app.patch('/clientes/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Clientes.altera(id, valores, res)
    })

    app.delete('/clientes/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Clientes.deleta(id, res)
    })
}

