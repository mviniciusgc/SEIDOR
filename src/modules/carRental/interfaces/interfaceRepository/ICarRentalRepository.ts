import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'
import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'
import { CarRentalEntitie } from '../../models/CarRentalEntitie'

interface ICarRentalRepository {
    create(motorista: IDriver, carro: IAutomobile, descricaoUtilizacao: string): CarRentalEntitie;
    //  update(data: IDriver): DriverEntitie;
    //  findList(data: IFilterDriver): Array<DriverEntitie>;
    //  delete(id: string): Array<DriverEntitie>;
      findByIdDriver(id: string): CarRentalEntitie | undefined;
      findByIdAutomobile(id: string): CarRentalEntitie | undefined;
}

export { ICarRentalRepository }