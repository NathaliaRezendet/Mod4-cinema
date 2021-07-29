const customExpress = require ('./config/customExpress')
const create = require('./infra/create')
const Tabelas = require('./infra/tabelas')
/*create.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log(('conectado com sucesso'))

    }
})*/

     Tabelas.init(create)
     const app = customExpress ()
        
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))

