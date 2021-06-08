import { ICreateCategory } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICreateCategory) {}
    execute({ name, description }: IRequest): void {
        const categoryAlredyExist =
            this.categoryRepository.findCategoryByName(name);

        if (categoryAlredyExist) {
            throw new Error('Category already Exists! ');
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
