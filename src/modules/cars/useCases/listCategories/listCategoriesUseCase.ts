import { Category } from '../../model/category';
import { CategoryRepository } from '../../repositories/implementations/categoryRepository';

class ListCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}
    execute(): Category[] {
        const categories = this.categoryRepository.list();

        return categories;
    }
}
export { ListCategoryUseCase };
