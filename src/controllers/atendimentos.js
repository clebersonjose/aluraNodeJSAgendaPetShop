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
}

export default new Atendimentos();