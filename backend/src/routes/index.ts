import { Router } from 'express';
import CostumerRouter from './CostumersRoutes';
import CompanyRouter from './CompaniesRoutes';
import ProductRouter from './ProductsRoutes';


const routes = Router();

routes.use(CostumerRouter);
routes.use(CompanyRouter);
routes.use(ProductRouter);

export default routes;