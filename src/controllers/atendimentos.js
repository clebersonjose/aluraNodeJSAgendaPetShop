import atendimento from '../models/atendimento.js'

class Atendimentos {
  add(req, res) {
    const atendimentoData = req.body;
    atendimento.add(atendimentoData, res);
  }
}

export default new Atendimentos();