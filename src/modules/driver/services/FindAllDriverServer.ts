import { injectable, inject } from "tsyringe";
import { IDriverRepository } from '../interfaces/interfaceRepository/IDriverRepository'
import { DriverEntitie } from '../models/DriverEntitie'
import { IFilterDriver } from '../interfaces/filters/IFilterdriver'


@injectable()
class FindAllDriverServer {

    constructor(
        @inject('AutomobileRepository')
        private automobileRepository: IDriverRepository
    ) { }

    public async execute(data: IFilterDriver): Promise<Array<DriverEntitie>> {
        return this.automobileRepository.findList(data);
    }
}
export { FindAllDriverServer }
