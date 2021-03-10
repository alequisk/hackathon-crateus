import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import AuthMiddleware from '../controllers/middlewares/AuthMiddleware';

import multer from 'multer';
import multerConfigs from '../configs/multer';

const router = Router();

router.post('/products', AuthMiddleware.validate, multer(multerConfigs).single('avatar'), ProductsController.create);

export default router;