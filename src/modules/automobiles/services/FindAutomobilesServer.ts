import { injectable, inject } from "tsyringe";
import { IAutomobileRepository } from '../interfaces/interfaceRepository/IAutomobileRepository'
import { AutomobileEntitie } from '../models/AutomobileEntitie'


@injectable()
class FindAutomobileServer {

    constructor(
        @inject('AutomobileRepository')
        private automobileRepository: IAutomobileRepository
    ) { }

    public async execute(id: string): Promise<AutomobileEntitie | undefined> {
        return this.automobileRepository.findById(id);
    }
}
export { FindAutomobileServer }
