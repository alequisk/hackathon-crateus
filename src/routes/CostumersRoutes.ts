import { Router } from 'express';
import CostumerController from '../controllers/CostumerController';

const CostumerRouter = Router();

CostumerRouter.get('/users', CostumerController.index);
CostumerRouter.post('/login', CostumerController.signIn);
CostumerRouter.post('/costumers/register', CostumerController.register);

export default CostumerRouter;