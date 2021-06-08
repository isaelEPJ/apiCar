import { CategoryRepository } from '../../repositories/implementations/categoryRepository';
import { ImportCategoryController } from './importCategoryController';
import { ImportCategoryUseCase } from './importCategoryUseCase';

const categoryRepository = CategoryRepository.getInstance();

const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);

const importCategoryController = new ImportCategoryController(
    importCategoryUseCase,
);

export { importCategoryController };
