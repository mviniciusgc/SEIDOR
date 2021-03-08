import { IDriver } from '../interfaces/interfaceDTO/IDriverDTO'
import { AutomobileEntitie } from '@modules/automobiles/models/AutomobileEntitie'
import { DriverEntitie } from '@modules/driver/models/DriverEntitie'
import { uuid } from 'uuidv4'

class CarRentalEntitie {

    public id?: string;
    public motorista: DriverEntitie;
    public carro: AutomobileEntitie

    constructor(props: IDriver, id?: string) {

        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }


}

export { CarRentalEntitie }