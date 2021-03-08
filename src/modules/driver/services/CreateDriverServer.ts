import { injectable, inject } from "tsyringe";
import { IDriverRepository } from '../interfaces/interfaceRepository/IDriverRepository'
import { IDriver } from '../interfaces/interfaceDTO/IDriverDTO'
import { DriverEntitie } from '../models/DriverEntitie'

@injectable()
class CreateDriverServer {

    constructor(
        @inject('DriverRepository')
        private driverRepository: IDriverRepository
    ) { }

    public async execute(data: IDriver): Promise<DriverEntitie> {
        return this.driverRepository.create(data);
    }
}
export { CreateDriverServer }
