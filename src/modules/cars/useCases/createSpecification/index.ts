import { SpecificationsRepository } from '../../repositories/implementations/specificationsRepository';
import { CreateSpecificationController } from './createSpecificationController';
import { CreateSpecificationUseCase } from './createSpecificationUseCase';

const createSpecificationRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
    createSpecificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
);

export { createSpecificationController };
