import 'reflect-metadata';
import { AutomobileRepository } from '../repositories/AutomobileRepository'
import { CreateAutomobileServer } from '@modules/automobiles/services/CreateAutomobileServer'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'

describe('Create Automobiles', () => {

    let fakeAutomobileRepository: AutomobileRepository;
    let createAutomobileServer: CreateAutomobileServer;

    beforeEach(() => {
        fakeAutomobileRepository = new AutomobileRepository();
        createAutomobileServer = new CreateAutomobileServer(fakeAutomobileRepository);
    })

    it('should be able create a new automobile', async () => {
        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }

        const newAutomobile = await createAutomobileServer.execute(automobile)
        expect(newAutomobile).toHaveProperty('id');

    })

    it('should not be able to create a automobile with the same license plate', async () => {

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "Vermelho",
            marca: "honda"
        }
        const rejectAutomobile: IAutomobile = {
            placa: "hgd2563",
            cor: "branco",
            marca: "fiat"
        }
        await createAutomobileServer.execute(automobile)
        await expect(createAutomobileServer.execute(rejectAutomobile)).rejects.toThrow();

    })





})

