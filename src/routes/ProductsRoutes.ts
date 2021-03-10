import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import AuthMiddleware from '../controllers/middlewares/AuthMiddleware';

const router = Router();

router.post('/products', AuthMiddleware.validate, ProductsController.create);

export default router;