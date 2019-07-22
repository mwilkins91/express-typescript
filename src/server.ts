import express from 'express';
import knex from 'knex';
import router from './routes';

const knexInstance: knex = knex({});

const app: express.Application = express();
const port: number = process.env.PORT ? parseInt(<string>process.env.PORT) : 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})