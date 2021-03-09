import { Router } from 'express';
import UserRouter from './UsersRoutes';

const routes = Router();

routes.use(UserRouter);

export default routes;