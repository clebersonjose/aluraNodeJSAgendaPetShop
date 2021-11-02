import conexao from './conexao.js';

const sql = `
  CREATE TABLE IF NOT EXISTS Atendimentos (
    id int NOT NULL AUTO_INCREMENT,
    cliente varchar(50) NOT NULL,
    pet varchar(20),
    servico varchar(20) NOT NULL,
    data datetime NOT NULL,
    dataCriacao datetime NOT NULL,
    status varchar(20) NOT NULL,
    observacoes text,
    
    PRIMARY KEY(id)
  );
`;

const tabela = () => conexao.connect(erro => {
  if (erro) {
    process.stdout.write(`${erro} \n`);
    return;
  }

  process.stdout.write('conectado com sucesso \n');

  conexao.query(sql, erro => {
    if (erro) {
      process.stdout.write(`${erro} \n`);
      return;
    }

    process.stdout.write('Tabela Atendimentos criada com sucesso \n');
  })

});


export default tabela;