import 'reflect-metadata';
import { AutomobileRepository } from '../repositories/AutomobileRepository'
import { CreateAutomobileServer } from '@modules/automobiles/services/CreateAutomobileServer'
import { UpdateAutomobileServer } from '@modules/automobiles/services/UpdateAutomobileServer'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'

describe('Update Automobiles', () => {

    let fakeAutomobileRepository: AutomobileRepository;
    let createAutomobileServer: CreateAutomobileServer;
    let updateAutomobileServer: UpdateAutomobileServer;

    beforeEach(() => {
        fakeAutomobileRepository = new AutomobileRepository();
        createAutomobileServer = new CreateAutomobileServer(fakeAutomobileRepository);
        updateAutomobileServer = new UpdateAutomobileServer(fakeAutomobileRepository)
    })

    it('should be able update a automobile', async () => {

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }

        const newAutomobile = await createAutomobileServer.execute(automobile)

        const updateAutomobile: IAutomobile = {
            id: newAutomobile.id,
            placa: "jcf0101",
            cor: "Preto",
            marca: "fiat"
        }
        expect(await updateAutomobileServer.execute(updateAutomobile)).toEqual(updateAutomobile);
    })

    it('not should be able to update a automobile, car is not exist', async () => {

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }

        const newAutomobile = await createAutomobileServer.execute(automobile)

        const updateAutomobile: IAutomobile = {
            id: '020202',
            placa: "jcf0101",
            cor: "Preto",
            marca: "fiat"
        }
        await expect(updateAutomobileServer.execute(updateAutomobile)).rejects.toThrow();
    })

    it('not should be able to update a automobile, id is not exist', async () => {

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }

        const newAutomobile = await createAutomobileServer.execute(automobile)

        const updateAutomobile: IAutomobile = {
            id: undefined,
            placa: "jcf0101",
            cor: "Preto",
            marca: "fiat"
        }
        await expect(updateAutomobileServer.execute(updateAutomobile)).rejects.toThrow();
    })

})

