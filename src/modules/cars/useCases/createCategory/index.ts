import { CategoryRepository } from '../../repositories/implementations/categoryRepository';
import { CreateCategoryController } from './createCategoryController';
import { CreateCategoryUseCase } from './createCategoryUseCase';

const categoriesRepository = CategoryRepository.getInstance();
const createCategoryUserCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
    createCategoryUserCase,
);

export { createCategoryController };
