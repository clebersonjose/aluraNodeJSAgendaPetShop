// // TODO: Configurar app;
// // TODO: Banco de dados;
// // TODO: Post atendimento;
// TODO: Detalhamento de atendimento;
// TODO: Delete atendimento;
// TODO: Put atendimento;
// TODO: Get atendimentos;

import express from 'express';
import cors from 'cors';

import routes from './src/routes.js';
import tabela from './src/helpers/tabela.js';

tabela();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log("ta on"));
