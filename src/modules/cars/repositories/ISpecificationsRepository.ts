import { Specification } from '../model/specification';

interface ISpecificationDTO {
    name: string;
    description: string;
}
interface ISpecificationsRepository {
    create({ name, description }: ISpecificationDTO): void;
    list(): Specification[];
    findSpecificationByName(name:string):Specification;

}
export { ISpecificationsRepository, ISpecificationDTO };
