import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequire {
    name: string;
    description: string;
}
class CreateSpecificationUseCase {
    constructor(
        private createSpecificationRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequire): void {
        const specificationALreadyExists =
            this.createSpecificationRepository.findSpecificationByName(name);
        if (specificationALreadyExists) {
            throw new Error('Specification Already Exists');
        }

        this.createSpecificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
