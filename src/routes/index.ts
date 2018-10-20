import express from 'express';
import views from './views';
const router: express.Router = express.Router();

router.use('/', views);

export default router;