import { IAutomobile } from '../interfaces/interfaceDTO/IAutomobileDTO'
import { uuid } from 'uuidv4'

class AutomobileEntitie {

    public id?: string;
    public placa: string;
    public cor: string;
    public marca: string;

    constructor(props: IAutomobile, id?: string) {

        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }


}

export { AutomobileEntitie }