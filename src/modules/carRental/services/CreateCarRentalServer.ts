import { injectable, inject } from "tsyringe";
import { ICarRentalRepository } from '../interfaces/interfaceRepository/ICarRentalRepository'
import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'
import { CarRentalEntitie } from '../models/CarRentalEntitie'
import { IDriverRepository } from '@modules/driver/interfaces/interfaceRepository/IDriverRepository'

@injectable()
class CreateCarRentalServer {

    constructor(
        @inject('CarRentalRepository')
        private carRentalRepository: ICarRentalRepository,
    ) { }

    public async execute(motorista: IDriver, carro: IAutomobile, descricaoUtilizacao: string): Promise<CarRentalEntitie> {
        let driverExist = false;

        if (motorista.id) {
            driverExist = !!this.carRentalRepository.findByIdDriver(motorista.id as string)
        } else {
            throw Error("Id motorista não existe")
        }

        if (driverExist) {
            throw Error("Motorista já alugou um veiculo")
        }

        if (carro.id) {
            driverExist = !!this.carRentalRepository.findByIdAutomobile(carro.id as string)
        } else {
            throw Error("Id do carro não existe")
        }

        if (driverExist) {
            throw Error("Carro já alugado")
        }
        return this.carRentalRepository.create(motorista, carro, descricaoUtilizacao);

    }
}
export { CreateCarRentalServer }
