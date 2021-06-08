import { CategoryRepository } from '../../repositories/implementations/categoryRepository';
import { ListCategoriesController } from './listCategoriesController';
import { ListCategoryUseCase } from './listCategoriesUseCase';

const categoryRepository = CategoryRepository.getInstance ();
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoryUseCase,
);

export { listCategoriesController };
