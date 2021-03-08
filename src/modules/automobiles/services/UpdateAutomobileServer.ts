import { injectable, inject } from "tsyringe";
import { IAutomobileRepository } from '../interfaces/interfaceRepository/IAutomobileRepository'
import { IAutomobile } from '../interfaces/interfaceDTO/IAutomobileDTO'
import { Automobile } from '../models/AutomobileEntitie'

@injectable()
class UpdateAutomobileServer {

    constructor(
        @inject('AutomobileRepository')
        private automobileRepository: IAutomobileRepository
    ) { }

    public async execute(data: IAutomobile): Promise<Automobile> {

        if (data.id) {
            const existAutomobileById = this.automobileRepository.findById(data.id)
            if (existAutomobileById) {
                return this.automobileRepository.update(data);
            }
            throw Error("O carro não existe");
        }

        throw Error("Id não informado");
    }
}
export { UpdateAutomobileServer }
