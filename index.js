// // TODO: Configurar app;
// // TODO: Banco de dados;
// TODO: Get atendimentos;
// TODO: Detalhamento de atendimento;
// TODO: Post atendimento;
// TODO: Put atendimento;
// TODO: Delete atendimento;

import express from 'express';
import cors from 'cors';

import routes from './src/routes.js';
import tabela from './src/config/tabela.js';

if (tabela) {

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);
  app.listen(3333, () => console.log("ta on"));
}