// // TODO: Configurar app;
// TODO: Banco de dados;
// TODO: Get atendimentos;
// TODO: Detalhamento de atendimento;
// TODO: Post atendimento;
// TODO: Put atendimento;
// TODO: Delete atendimento;

import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Server online'));

app.listen(3000, () => console.log('Server online'));
