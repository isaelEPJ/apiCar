import { Specification } from '../../model/specification';
import {
    ISpecificationDTO,
    ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.specifications = [];
    }
    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ISpecificationDTO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    }
    list(): Specification[] {
        return this.specifications;
    }
    findSpecificationByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name,
        );

        return specification;
    }
}
export { SpecificationsRepository };
