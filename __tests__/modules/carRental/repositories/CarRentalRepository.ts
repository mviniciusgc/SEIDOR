import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'
import { ICarRentalRepository } from '@modules/carRental/interfaces/interfaceRepository/ICarRentalRepository'
import { CarRentalEntitie } from '@modules/carRental/models/CarRentalEntitie'


class CarRentalRepository implements ICarRentalRepository {
    private carRentalEntitie: Array<CarRentalEntitie>

    constructor() {
        this.carRentalEntitie = [];
    }
    public create(motorista: IDriver, carro: IAutomobile, descricaoUtilizacao: string): CarRentalEntitie {
        const carRental = new CarRentalEntitie(motorista, carro,descricaoUtilizacao);
        this.carRentalEntitie.push(carRental);
        return carRental;
    }
    public findByIdDriver(id: string): CarRentalEntitie | undefined {
        return this.carRentalEntitie.find(item => item.motorista.id === id)

    }
    public findByIdAutomobile(id: string): CarRentalEntitie | undefined {
        return this.carRentalEntitie.find(item => item.carro.id === id)

    }


}

export { CarRentalRepository }