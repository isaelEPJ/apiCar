import { Category } from "../model/category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICreateCategory {
    create(iCreateCategoryDTO: ICreateCategoryDTO): void;
    list(): void;
    findCategoryByName(name: string): Category;
}

export { ICreateCategory, ICreateCategoryDTO };
