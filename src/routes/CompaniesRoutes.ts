import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';

const router = Router();

router.post('/company/register', CompaniesController.create);
router.post('/company/login', CompaniesController.signIn)

export default router;