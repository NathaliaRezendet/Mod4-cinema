class Tabelas {
    init(create) {
        this.create = create

        this.criarClientes()
    }

    criarClientes(){
        const sql = 'CREATE TABLE IF NOT EXISTS Clientes (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, CPF int, endereco varchar(150), celular int, PRIMARY KEY(id))'
        
        this.create.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela clientes criada com sucesso');
            }
        })
    }
}

module.exports = new Tabelas