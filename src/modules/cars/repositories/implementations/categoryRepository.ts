import { Category } from '../../model/category';
import { ICreateCategory, ICreateCategoryDTO } from '../ICategoriesRepository';

class CategoryRepository implements ICreateCategory {
    private categories: Category[];

    private static INSTANCE: CategoryRepository;

    private constructor() {
        this.categories = [];
    }
    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository();
        }
        return CategoryRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name: name,
            description: description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }
    // funçao abaixo lista as categorias.
    list(): Category[] {
        return this.categories;
    }

    findCategoryByName(name: string): Category {
        const category = this.categories.find(
            (category) => category.name === name,
        );
        return category;
    }
}
export { CategoryRepository };
