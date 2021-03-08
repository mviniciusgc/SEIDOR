import 'reflect-metadata';
import { AutomobileRepository } from '../repositories/AutomobileRepository'
import { CreateAutomobileServer } from '@modules/automobiles/services/CreateAutomobileServer'
import { FindAutomobileServer } from '@modules/automobiles/services/FindAutomobilesServer'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'

describe('find Automobiles', () => {

    let fakeAutomobileRepository: AutomobileRepository;
    let createAutomobileServer: CreateAutomobileServer;
    let findAutomobileServer: FindAutomobileServer;

    beforeEach(() => {
        fakeAutomobileRepository = new AutomobileRepository();
        createAutomobileServer = new CreateAutomobileServer(fakeAutomobileRepository);
        findAutomobileServer = new FindAutomobileServer(fakeAutomobileRepository)
    })

    it('should be able find automobile by id', async () => {

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }

        const newAutomobile = await createAutomobileServer.execute(automobile)
        expect(await findAutomobileServer.execute(newAutomobile.id as string)).toEqual(newAutomobile);
    })


})

