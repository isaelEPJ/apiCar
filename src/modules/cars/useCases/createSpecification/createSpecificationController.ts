import { CreateSpecificationUseCase } from './createSpecificationUseCase';
import { Request, Response } from 'express';

class CreateSpecificationController {
    constructor(
        private createSpecificationUseCase: CreateSpecificationUseCase,
    ) {}
    handle(req: Request, res: Response) {
        const { name, description } = req.body;

        this.createSpecificationUseCase.execute({ name, description });
        return res.json('Sucessfuly');
    }
}
export { CreateSpecificationController };
