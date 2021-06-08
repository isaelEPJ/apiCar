import { Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp',
});
categoriesRoutes.get('/', (req, res) => {
    return listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/create', (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
    importCategoryController.handle(req, res);
});

export default categoriesRoutes;
