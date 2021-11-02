import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.send('Server online'));

export default routes;
