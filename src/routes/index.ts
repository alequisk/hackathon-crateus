import { Router } from 'express';
import { getConnection } from 'typeorm';
import CostumerRouter from './CostumersRoutes';

const routes = Router();

routes.get('/', (rr, rs) => {
  console.log(getConnection());
  return rs.send('ok');
})

routes.use(CostumerRouter);

export default routes;