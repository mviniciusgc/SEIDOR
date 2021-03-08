import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'
import { AutomobileEntitie } from '@modules/automobiles/models/AutomobileEntitie'
import { DriverEntitie } from '@modules/driver/models/DriverEntitie'
import { uuid } from 'uuidv4'

class CarRentalEntitie {

    public id?: string;
    public dataInicio?: Date;
    public dataFinalizacao?: Date;
    public descricaoUtilizacao?: string;
    public motorista: DriverEntitie;
    public carro: AutomobileEntitie

    constructor(motorista: IDriver, carro: AutomobileEntitie,descricaoUtilizacao?: string, create: boolean = true,id?: string,) {

        this.carro = carro;
        this.motorista = motorista;
        this.descricaoUtilizacao = descricaoUtilizacao;
        if (create) {
            this.dataInicio = new Date();
        } else {
            this.dataFinalizacao = new Date()
        }

        if (!id) {
            this.id = uuid();
        }
    }


}

export { CarRentalEntitie }