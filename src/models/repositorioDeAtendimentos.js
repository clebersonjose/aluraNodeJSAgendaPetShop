import moment from "moment";
import conexao from "../helpers/conexao.js";

class RepositorioDeAtendimentos {
  get(res) {
    const sql = 'SELECT * FROM Atendimentos'

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      res.status(200).json(resultados);
    })
  }

  add(atendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
    const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
    const clienteEhValido = atendimento.cliente.length >= 5;

    const validacoes = [
      {
        nome: 'data',
        valido: dataEhValida,
        mensagem: 'Data deve ser maior ou igual a data atual'
      },
      {
        nome: 'cliente',
        valido: clienteEhValido,
        mensagem: 'Cliente deve ter pelo menos cinco caracteres'
      }
    ];

    const erros = validacoes.filter(campo => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      res.status(400).json(erros);
      return;
    }

    const atendimentoDatado = { ...atendimento, dataCriacao, data };
    const sql = 'INSERT INTO Atendimentos SET ?'

    conexao.query(sql, atendimentoDatado, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      res.status(201).json({ ...atendimento, ...resultados });
    })
  }

  delete(id, res) {
    const sql = 'DELETE FROM Atendimentos WHERE id=?'

    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      res.status(200).json({ id })
    })
  }
}

export default new RepositorioDeAtendimentos();