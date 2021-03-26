
const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect((error) => {
    if(error){
        console.log(error);
    }else{
        console.log('Conectado com sucesso!');
        Tabelas.init(conexao);
        const app = customExpress();
        
        app.listen(3000, () => console.log("servidor rodando na porta 3000"));
    }
})