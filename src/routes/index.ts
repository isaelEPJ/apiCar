import { Router } from 'express';
import categoriesRoutes from './categories.routes';
import specificationsRoute from './specifications.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/specifications', specificationsRoute);

export default routes;
