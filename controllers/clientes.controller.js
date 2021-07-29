module.exports = app => {

    app.get('/clientes', (req, res) => res.send('Você está na rota de armazenamento de dados dos clientes do seu cinema!'))

    app.post('/clientes', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de clientes e está realizando um POST')
    })
}

