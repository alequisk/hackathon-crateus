import { Router } from 'express';
import UserController from '../controllers/UserController';
import AuthMiddleware from '../controllers/middlewares/AuthMiddleware';

const UserRouter = Router();

UserRouter.get('/users', UserController.index);
UserRouter.post('/login', UserController.signIn);
UserRouter.get('/users/secret', AuthMiddleware.validate, (req, res) => {
  return res.json({
    message: "secret endpoint finded!",
    data: req.body.token_data
  });
}); 

export default UserRouter;