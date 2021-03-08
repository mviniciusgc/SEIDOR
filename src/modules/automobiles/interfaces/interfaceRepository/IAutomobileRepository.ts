import { IAutomobile } from '../interfaceDTO/IAutomobileDTO'
import { AutomobileEntitie } from '../../models/AutomobileEntitie'
import { IFilterAutomobile } from '../filters/IFilterAutomobile'

interface IAutomobileRepository {
    create(data: IAutomobile): AutomobileEntitie;
    update(data: IAutomobile): AutomobileEntitie;
    findList(data: IFilterAutomobile): Array<AutomobileEntitie>;
    delete(id: string): Array<AutomobileEntitie>;
    findByPlate(placa: string): AutomobileEntitie | undefined;
    findById(id: string): AutomobileEntitie | undefined;
}

export { IAutomobileRepository }