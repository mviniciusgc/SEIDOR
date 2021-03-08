import { injectable, inject } from "tsyringe";
import { IDriverRepository } from '../interfaces/interfaceRepository/IDriverRepository'
import { DriverEntitie } from '../models/DriverEntitie'


@injectable()
class FindDriverServer {

    constructor(
        @inject('DriverRepository')
        private driverRepository: IDriverRepository
    ) { }

    public async execute(id: string): Promise<DriverEntitie | undefined> {
        const driver = this.driverRepository.findById(id);
        return driver;
    }
}
export { FindDriverServer }
