import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'
import { IDriverRepository } from '@modules/driver/interfaces/interfaceRepository/IDriverRepository'
import { DriverEntitie } from '@modules/driver/models/DriverEntitie'
import { IFilterDriver } from '@modules/driver/interfaces/filters/IFilterdriver'

class DriverRepository implements IDriverRepository {

    private drivers: Array<DriverEntitie>

    constructor() {
        this.drivers = [];
    }


    public create(data: IDriver): DriverEntitie {

        const automobile = new DriverEntitie(data)
        this.drivers.push(automobile);
        return automobile;

    }

    public findById(id: string): DriverEntitie | undefined {
        return this.drivers.find(item => item.id === id)

    }

    public update(data: IDriver): DriverEntitie {

        const currentAutomobile = this.drivers.findIndex(item => item.id === data.id)

        this.drivers[currentAutomobile] = data;

        return data;

    }

    public delete(id: string): Array<DriverEntitie> {
        const index = this.drivers.findIndex(item => item.id === id)
        this.drivers.splice(index, 1);
        return this.drivers;
    }

    public findList({nome  }: IFilterDriver): Array<DriverEntitie> {

        let drivers = this.drivers;

        if (nome) {
            drivers = drivers.filter((item) => item.nome === nome)
        }
        return drivers;
    }

}

export { DriverRepository }