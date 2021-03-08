import { injectable, inject } from "tsyringe";
import { IDriverRepository } from '../interfaces/interfaceRepository/IDriverRepository'
import { DriverEntitie } from '../models/DriverEntitie'

@injectable()
class DeleteDriverServer {

    constructor(
        @inject('AutomobileRepository')
        private automobileRepository: IDriverRepository
    ) { }

    public async execute(id: string): Promise<Array<DriverEntitie>> {
        const existAutomobileById = this.automobileRepository.findById(id)
        if (existAutomobileById) {
            return this.automobileRepository.delete(id);
        }
        throw Error("Não existe um carro para esse Id");
    }
}
export { DeleteDriverServer }
