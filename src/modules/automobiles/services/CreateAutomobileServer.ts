import { injectable, inject } from "tsyringe";
import { IAutomobileRepository } from '../interfaces/interfaceRepository/IAutomobileRepository'
import { IAutomobile } from '../interfaces/interfaceDTO/IAutomobileDTO'
import { AutomobileEntitie } from '../models/AutomobileEntitie'

@injectable()
class CreateAutomobileServer {

    constructor(
        @inject('AutomobileRepository')
        private automobileRepository: IAutomobileRepository
    ) { }

    public async execute(data: IAutomobile): Promise<AutomobileEntitie> {
        const existAutomobileForPlate = this.automobileRepository.findByPlate(data.placa)
        if (existAutomobileForPlate) {
            throw Error("Placa do carro já cadastrada");
        }
        return this.automobileRepository.create(data);
    }
}
export { CreateAutomobileServer }
