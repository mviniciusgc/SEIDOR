import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'
import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'
import { CarRentalEntitie } from '../../models/CarRentalEntitie'
import { IFilterDriver } from '../filters/IFilterdriver'

interface ICarRentalRepository {
    create(motorista: IDriver, carro: IAutomobile): CarRentalEntitie;
    //  update(data: IDriver): DriverEntitie;
    //  findList(data: IFilterDriver): Array<DriverEntitie>;
    //  delete(id: string): Array<DriverEntitie>;
    //  findById(id: string): DriverEntitie | undefined;
}

export { ICarRentalRepository }