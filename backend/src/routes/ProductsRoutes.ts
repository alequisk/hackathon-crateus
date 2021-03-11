import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import AuthMiddleware from '../controllers/middlewares/AuthMiddleware';

import multer from 'multer';
import multerConfigs from '../configs/multer';

const router = Router();

router.post('/products', AuthMiddleware.validate, ProductsController.create);
router.put('/products/avatar',  multer(multerConfigs).single('avatar'), AuthMiddleware.validate, ProductsController.changeAvatar);

export default router;