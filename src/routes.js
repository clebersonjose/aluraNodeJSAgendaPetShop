import { Router } from 'express';
import atendimentos from './controllers/atendimentos.js';

const routes = Router();

routes.post('/atendimentos', (req, res) => atendimentos.add(req, res));

export default routes;
