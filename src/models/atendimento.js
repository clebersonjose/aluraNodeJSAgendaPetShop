import moment from "moment";
import conexao from "../helpers/conexao.js";

class Atendimento {
  view(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

    conexao.query(sql, (erro, resultados) => {
      const atendimento = resultados[0]
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      res.status(200).json(atendimento);
    })
  }

  edit(id, data, res) {
    if (data.data) {
      data.data = moment(data.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    }

    const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

    conexao.query(sql, [data, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      res.status(200).json({ ...data, id })
    })
  }
}

export default new Atendimento();