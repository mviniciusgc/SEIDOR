import { injectable, inject } from "tsyringe";
import { IDriverRepository } from '../interfaces/interfaceRepository/IDriverRepository'
import { DriverEntitie } from '../models/DriverEntitie'
import { IFilterDriver } from '../interfaces/filters/IFilterdriver'


@injectable()
class FindAllDriverServer {

    constructor(
        @inject('DriverRepository')
        private driverRepository: IDriverRepository
    ) { }

    public async execute(data: IFilterDriver): Promise<Array<DriverEntitie>> {
        return this.driverRepository.findList(data);
    }
}
export { FindAllDriverServer }
