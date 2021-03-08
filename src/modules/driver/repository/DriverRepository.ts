import { IDriver } from '../interfaces/interfaceDTO/IDriverDTO'
import { IDriverRepository } from '../interfaces/interfaceRepository/IDriverRepository'
import { DriverEntitie } from '../models/DriverEntitie'
import { IFilterDriver } from '../interfaces/filters/IFilterdriver'


class DriverRepository implements IDriverRepository {
    private drivers: Array<DriverEntitie>

    public create(data: IDriver): DriverEntitie {
        const automobile = new DriverEntitie(data)
        this.drivers.push(automobile);
        return automobile;
    }

    public delete(id: string): Array<DriverEntitie> {
        const index = this.drivers.findIndex(item => item.id === id)
        this.drivers.splice(index, 1);

        return this.drivers;
    }

    public findById(id: string): DriverEntitie | undefined {
        return this.drivers.find(item => item.id === id)
    }
    public findList({ nome}: IFilterDriver): Array<DriverEntitie> {
        let drivers = this.drivers;
        if (nome){
            drivers = drivers.filter((item) => item.nome === nome)
        }
        return drivers;
    }

    public update(data: IDriver): DriverEntitie {
        const index = this.drivers.findIndex(item => item.id === data.id)
        this.drivers[index] = data;
        return data;
    }

}

export { DriverRepository }