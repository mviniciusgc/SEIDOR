import { AutomobileDTO } from '../dto/AutomobileDTO';
import { IAutomobile } from '../interfaces/interfaceDTO/IAutomobileDTO'
import { IAutomobileRepository } from '../interfaces/interfaceRepository/IAutomobileRepository'
import { AutomobileEntitie } from '../models/AutomobileEntitie'
import { IFilterAutomobile } from '../interfaces/filters/IFilterAutomobile'


class AutomobileRepository implements IAutomobileRepository {
    private automobiles: Array<AutomobileEntitie>

    public create(data: IAutomobile): AutomobileEntitie {
        const automobile = new AutomobileEntitie(data)
        this.automobiles.push(automobile);
        return automobile;
    }

    public delete(id: string): Array<AutomobileEntitie> {
        const index = this.automobiles.findIndex(item => item.id === id)
        this.automobiles.splice(index, 1);

        return this.automobiles;
    }

    public findByPlate(placa: string): AutomobileEntitie | undefined {
        return this.automobiles.find(item => item.placa === placa)
    }

    public findById(id: string): AutomobileEntitie | undefined {
        return this.automobiles.find(item => item.id === id)
    }
    public findList({ marca, cor}: IFilterAutomobile): Array<AutomobileEntitie> {

        let carro = this.automobiles;

        if (marca) {
            carro = carro.filter((item) => item.marca === marca)
        }
        if (cor) {
            carro = carro.filter((item) => item.cor === cor)
        }

        return carro;
    }

    public update(data: IAutomobile): AutomobileEntitie {
        const index = this.automobiles.findIndex(item => item.id === data.id)
        this.automobiles[index] = data;
        return data;
    }

}

export { AutomobileRepository }