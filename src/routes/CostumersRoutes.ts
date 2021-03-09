import { Router } from 'express';
import CostumerController from '../controllers/CostumerController';
import AuthMiddleware from '../controllers/middlewares/AuthMiddleware';

const CostumerRouter = Router();

CostumerRouter.get('/users', CostumerController.index);
CostumerRouter.post('/login', CostumerController.signIn);
CostumerRouter.get('/users/secret', AuthMiddleware.validate, (req, res) => {
  return res.json({
    message: "secret endpoint finded!",
    data: req.body.token_data
  });
}); 

export default CostumerRouter;