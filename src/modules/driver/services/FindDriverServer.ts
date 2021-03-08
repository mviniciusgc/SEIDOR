import { injectable, inject } from "tsyringe";
import { IDriverRepository } from '../interfaces/interfaceRepository/IDriverRepository'
import { DriverEntitie } from '../models/DriverEntitie'


@injectable()
class FindDriverServer {

    constructor(
        @inject('AutomobileRepository')
        private automobileRepository: IDriverRepository
    ) { }

    public async execute(id: string): Promise<DriverEntitie | undefined> {
        return this.automobileRepository.findById(id);
    }
}
export { FindDriverServer }
