import express from 'express';
import cors from 'cors';

import routes from './src/routes.js';
import tabela from './src/helpers/tabela.js';

tabela();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333, () => process.stdout.write("ta on \n"));
