import { CreateCategoryUseCase } from './createCategoryUseCase';
import { Request, Response } from 'express';

class CreateCategoryController {
    constructor(private createCategoryUserCase: CreateCategoryUseCase) {}
    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;

        this.createCategoryUserCase.execute({ name, description });

        return res.json('category criada');
    }
}

export { CreateCategoryController };
