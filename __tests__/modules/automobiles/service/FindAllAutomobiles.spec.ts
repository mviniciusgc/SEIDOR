import 'reflect-metadata';
import { AutomobileRepository } from '../repositories/AutomobileRepository'
import { CreateAutomobileServer } from '@modules/automobiles/services/CreateAutomobileServer'
import { FindAllAutomobileServer } from '@modules/automobiles/services/FindAllAutomobilesServer'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'
import { IFilterAutomobile } from '@modules/automobiles/interfaces/filters/IFilterAutomobile'

describe('Find all Automobiles', () => {

    let fakeAutomobileRepository: AutomobileRepository;
    let createAutomobileServer: CreateAutomobileServer;
    let findAllAutomobileServer: FindAllAutomobileServer;

    beforeEach(() => {
        fakeAutomobileRepository = new AutomobileRepository();
        createAutomobileServer = new CreateAutomobileServer(fakeAutomobileRepository);
        findAllAutomobileServer = new FindAllAutomobileServer(fakeAutomobileRepository)
    })

    it('should be able list a automobiles', async () => {

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }
        const automobile1: IAutomobile = {
            placa: "asd5896",
            cor: "vermelho",
            marca: "fiat"
        }
        const automobile2: IAutomobile = {
            placa: "tgh0213",
            cor: "preto",
            marca: "honda"
        }

        const newAutomobile = await createAutomobileServer.execute(automobile)
        const newAutomobile1 = await createAutomobileServer.execute(automobile1)
        const newAutomobile2 = await createAutomobileServer.execute(automobile2)

        const filter: IFilterAutomobile = {
            cor: "vermelho",
            marca: undefined
        }
        expect(await findAllAutomobileServer.execute(filter)).toEqual(expect.arrayContaining([newAutomobile,newAutomobile1]));
    })


})

