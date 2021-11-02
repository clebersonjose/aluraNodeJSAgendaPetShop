import atendimento from '../models/atendimento.js'
import repositorioDeAtendimentos from '../models/repositorioDeAtendimentos.js'

class Atendimentos {
  add(req, res) {
    const atendimentoData = req.body;
    repositorioDeAtendimentos.add(atendimentoData, res);
  }

  view(req, res) {
    const id = parseInt(req.params.id)
    atendimento.view(id, res);
  }

  delete(req, res) {
    const id = parseInt(req.params.id)
    repositorioDeAtendimentos.delete(id, res);
  }

  edit(req, res) {
    const id = parseInt(req.params.id)
    const data = req.body
    atendimento.edit(id, data, res)
  }

  get(req, res) {
    repositorioDeAtendimentos.get(res);
  }
}

export default new Atendimentos();