import { Request, Response } from 'express';
import { ListCategoryUseCase } from './listCategoriesUseCase';

class ListCategoriesController {
    constructor(private listCategoryUseCase: ListCategoryUseCase) {}
    handle(req: Request, res: Response): Response {
        const allCategories = this.listCategoryUseCase.execute();

        return res.json(allCategories);
    }
}
export { ListCategoriesController };
