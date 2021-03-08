import { IDriver } from '../interfaceDTO/IDriverDTO'
import { DriverEntitie } from '../../models/DriverEntitie'
import { IFilterDriver } from '../filters/IFilterdriver'

interface IDriverRepository {
    create(data: IDriver): DriverEntitie;
    update(data: IDriver): DriverEntitie;
    findList(data: IFilterDriver): Array<DriverEntitie>;
    delete(id: string): Array<DriverEntitie>;
    findById(id: string): DriverEntitie | undefined;
}

export { IDriverRepository }