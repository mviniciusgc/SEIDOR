import { injectable, inject } from "tsyringe";
import { IAutomobileRepository } from '../interfaces/interfaceRepository/IAutomobileRepository'
import { AutomobileEntitie } from '../models/AutomobileEntitie'
import { IFilterAutomobile } from '../interfaces/filters/IFilterAutomobile'


@injectable()
class FindAllAutomobileServer {

    constructor(
        @inject('AutomobileRepository')
        private automobileRepository: IAutomobileRepository
    ) { }

    public async execute(data: IFilterAutomobile): Promise<Array<AutomobileEntitie>> {
        return this.automobileRepository.findList(data);
    }
}
export { FindAllAutomobileServer }
