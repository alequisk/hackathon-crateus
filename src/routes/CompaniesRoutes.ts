import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';
import AuthMiddleware from '../controllers/middlewares/AuthMiddleware';
import multerConfigs from '../configs/multer';
import multer from 'multer';

const router = Router();

router.post('/company/register', CompaniesController.create);
router.post('/company/login', CompaniesController.signIn);
router.get('/company/products/list', AuthMiddleware.validate, CompaniesController.listProducts);

router.put('/company/avatar', multer(multerConfigs).single('avatar'), AuthMiddleware.validate, CompaniesController.changeAvatar);

export default router;