import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/specificationsRepository';
import { createSpecificationService } from '../modules/cars/services/createSpecificationService';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoute = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoute.get('/', (req, res) => {
    const allSpec = specificationsRepository.list();
    return res.json(allSpec);
});

specificationsRoute.post('/create', (req, res) => {
    createSpecificationController.handle(req, res);
});

export default specificationsRoute;
