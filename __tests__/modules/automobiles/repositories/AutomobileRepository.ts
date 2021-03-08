import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'
import { IAutomobileRepository } from '@modules/automobiles/interfaces/interfaceRepository/IAutomobileRepository'
import { AutomobileEntitie } from '@modules/automobiles/models/AutomobileEntitie'
import { IFilterAutomobile } from '@modules/automobiles/interfaces/filters/IFilterAutomobile'

class AutomobileRepository implements IAutomobileRepository {

    private automobiles: Array<AutomobileEntitie>

    constructor() {
        this.automobiles = [];
    }


    public create(data: IAutomobile): AutomobileEntitie {

        const automobile = new AutomobileEntitie(data)
        this.automobiles.push(automobile);
        return automobile;

    }

    public findByPlate(placa: string): AutomobileEntitie | undefined {
        return this.automobiles.find(item => item.placa === placa)
    }

    public findById(id: string): AutomobileEntitie | undefined {
        return this.automobiles.find(item => item.id === id)

    }

    public update(data: IAutomobile): AutomobileEntitie {

        const currentAutomobile = this.automobiles.findIndex(item => item.id === data.id)

        this.automobiles[currentAutomobile] = data;

        return data;

    }

    public delete(id: string): Array<AutomobileEntitie> {
        const index = this.automobiles.findIndex(item => item.id === id)
        this.automobiles.splice(index, 1);
        return this.automobiles;
    }

    public findList({ marca, cor }: IFilterAutomobile): Array<AutomobileEntitie> {

        let carro = this.automobiles;

        if (marca) {
            carro = carro.filter((item) => item.marca === marca)
        }
        if (cor) {
            carro = carro.filter((item) => item.cor === cor)
        }

        return carro;
    }

}

export { AutomobileRepository }