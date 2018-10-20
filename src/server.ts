import express from 'express';
import router from './routes';

const app: express.Application = express();
const port: number = process.env.PORT ? parseInt(<string>process.env.PORT) : 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})