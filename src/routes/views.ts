import express from 'express';
const router: express.Router = express.Router();

router.use('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('Hello World!');
});

export default router;