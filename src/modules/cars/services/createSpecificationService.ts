import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequire {
    name: string;
    description: string;
}
class createSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequire): void {
        const specificationAlreadyExsits =
            this.specificationsRepository.findSpecificationByName(name);

        if (specificationAlreadyExsits) {
            throw new Error('Specification Already Exsits');
        }
        this.specificationsRepository.create({ name, description });
    }
}
export { createSpecificationService };
