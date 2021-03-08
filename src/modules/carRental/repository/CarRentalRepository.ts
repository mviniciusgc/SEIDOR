import { IDriver } from '../interfaces/interfaceDTO/IDriverDTO'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'
import { ICarRentalRepository } from '../interfaces/interfaceRepository/ICarRentalRepository'
import { CarRentalEntitie } from '../models/CarRentalEntitie'


class CarRentalRepository implements ICarRentalRepository {
    private carRentalEntitie: Array<CarRentalEntitie>

    public create(motorista: IAutomobile, carro: IDriver): CarRentalEntitie {
        const automobile = new CarRentalEntitie(data)
        this.carRentalEntitie.push(automobile);
        return automobile;
    }



}

export { CarRentalRepository }