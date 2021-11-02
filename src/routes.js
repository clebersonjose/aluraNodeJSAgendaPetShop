import { Router } from 'express';
import atendimentos from './controllers/atendimentos.js';

const routes = Router();

routes.post('/atendimentos', (req, res) => atendimentos.add(req, res));
routes.get('/atendimentos/:id', (req, res) => atendimentos.view(req, res));
routes.delete('/atendimentos/:id', (req, res) => atendimentos.delete(req, res));
routes.put('/atendimentos/:id', (req, res) => atendimentos.edit(req, res));

export default routes;
