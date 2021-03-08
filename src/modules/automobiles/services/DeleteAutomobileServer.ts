import { injectable, inject } from "tsyringe";
import { IAutomobileRepository } from '../interfaces/interfaceRepository/IAutomobileRepository'
import { IAutomobile } from '../interfaces/interfaceDTO/IAutomobileDTO'
import { Automobile } from '../models/AutomobileEntitie'

@injectable()
class DeleteAutomobileServer {

    constructor(
        @inject('AutomobileRepository')
        private automobileRepository: IAutomobileRepository
    ) { }

    public async execute(id: string): Promise<Array<Automobile>> {
        const existAutomobileById = this.automobileRepository.findById(id)
        if (existAutomobileById) {
            return this.automobileRepository.delete(id);
        }
        throw Error("Não existe um carro para esse Id");
    }
}
export { DeleteAutomobileServer }
