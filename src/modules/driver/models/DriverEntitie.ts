import { IDriver } from '../interfaces/interfaceDTO/IDriverDTO'
import { uuid } from 'uuidv4'

class DriverEntitie {

    public id?: string;
    public nome: string;

    constructor(props: IDriver, id?: string) {

        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }


}

export { DriverEntitie }