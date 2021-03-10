import { Router } from 'express';
import CostumerController from '../controllers/CostumerController';

import multerConfigs from '../configs/multer';
import multer from 'multer';
import AuthMiddleware from '../controllers/middlewares/AuthMiddleware';

const CostumerRouter = Router();

CostumerRouter.get('/users/:id', CostumerController.fetch);
CostumerRouter.get('/users', CostumerController.fetchAll);
CostumerRouter.post('/costumers/login', CostumerController.signIn);
CostumerRouter.post('/costumers/register', CostumerController.register);
CostumerRouter.put('/costumers/avatar', multer(multerConfigs).single('avatar'), AuthMiddleware.validate, CostumerController.changeAvatar);

export default CostumerRouter;