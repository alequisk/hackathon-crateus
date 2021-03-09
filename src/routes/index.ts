import { Router } from 'express';
import CostumerRouter from './CostumersRoutes';

import  connection from '../repositories/database/connection';

const routes = Router();

routes.get('/', (req, res) => {
  console.log(connection);
  return res.status(200);
});

routes.use(CostumerRouter);

export default routes;