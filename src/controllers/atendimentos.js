import atendimento from '../models/atendimento.js'

class Atendimentos {
  add(req, res) {
    const atendimentoData = req.body;
    atendimento.add(atendimentoData, res);
  }

  view(req, res) {
    const id = parseInt(req.params.id)
    atendimento.view(id, res);
  }

  delete(req, res) {
    const id = parseInt(req.params.id)
    atendimento.delete(id, res);
  }

  edit(req, res) {
    const id = parseInt(req.params.id)
    const data = req.body
    atendimento.edit(id, data, res)
  }
}

export default new Atendimentos();