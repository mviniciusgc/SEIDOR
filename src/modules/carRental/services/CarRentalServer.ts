import { injectable, inject } from "tsyringe";
import { ICarRentalRepository } from '../interfaces/interfaceRepository/ICarRentalRepository'
import { IDriver } from '../interfaces/interfaceDTO/IDriverDTO'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'
import { CarRentalEntitie } from '../models/CarRentalEntitie'

@injectable()
class CarRentalServer {

    constructor(
        @inject('DriverRepository')
        private driverRepository: ICarRentalRepository
    ) { }

    public async execute(motorista: IDriver, carro: IAutomobile): Promise<CarRentalEntitie> {
        return this.driverRepository.create(motorista,carro);
    }
}
export { CarRentalServer }
