import { injectable, inject } from "tsyringe";
import { IDriverRepository } from '../interfaces/interfaceRepository/IDriverRepository'
import { DriverEntitie } from '../models/DriverEntitie'

@injectable()
class DeleteDriverServer {

    constructor(
        @inject('DriverRepository')
        private driverRepository: IDriverRepository
    ) { }

    public async execute(id: string): Promise<Array<DriverEntitie>> {
        const existDriverById = this.driverRepository.findById(id)
        if (existDriverById) {
            return this.driverRepository.delete(id);
        }
        throw Error("Não existe um motorista para esse Id");
    }
}
export { DeleteDriverServer }
