import { injectable, inject } from "tsyringe";
import { IDriverRepository } from '../interfaces/interfaceRepository/IDriverRepository'
import { IDriver } from '../interfaces/interfaceDTO/IDriverDTO'
import { DriverEntitie } from '../models/DriverEntitie'

@injectable()
class UpdateDriverServer {

    constructor(
        @inject('DriverRepository')
        private driverRepository: IDriverRepository
    ) { }

    public async execute(data: IDriver): Promise<DriverEntitie> {
        if (data.id) {
            const existAutomobileById = this.driverRepository.findById(data.id)
            if (existAutomobileById) {
                return this.driverRepository.update(data);
            }
            throw Error("O motorista não existe");
        }

        throw Error("Id não informado");
    }
}
export { UpdateDriverServer }
