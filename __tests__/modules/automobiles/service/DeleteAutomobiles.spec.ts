import 'reflect-metadata';
import { AutomobileRepository } from '../repositories/AutomobileRepository'
import { CreateAutomobileServer } from '@modules/automobiles/services/CreateAutomobileServer'
import { DeleteAutomobileServer } from '@modules/automobiles/services/DeleteAutomobileServer'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'

describe('Delete Automobiles', () => {

    let fakeAutomobileRepository: AutomobileRepository;
    let createAutomobileServer: CreateAutomobileServer;
    let deleteAutomobileServer: DeleteAutomobileServer;

    beforeEach(() => {
        fakeAutomobileRepository = new AutomobileRepository();
        createAutomobileServer = new CreateAutomobileServer(fakeAutomobileRepository);
        deleteAutomobileServer = new DeleteAutomobileServer(fakeAutomobileRepository)
    })

    it('should be able delete a automobile', async () => {

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }

        const automobile2: IAutomobile = {
            placa: "hgd20606",
            cor: "branco",
            marca: "fiat"
        }
        const newAutomobile = await createAutomobileServer.execute(automobile)
        const newAutomobile2 = await createAutomobileServer.execute(automobile2)
        expect(await deleteAutomobileServer.execute(newAutomobile2.id as string)).toEqual(expect.arrayContaining([newAutomobile]));
    })

    it('not should be able to delete a automobile, car is not exist', async () => {

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }

        const automobile2: IAutomobile = {
            placa: "hgd20606",
            cor: "branco",
            marca: "fiat"
        }
        const newAutomobile = await createAutomobileServer.execute(automobile)
        const newAutomobile2 = await createAutomobileServer.execute(automobile2)

        await expect(deleteAutomobileServer.execute("Casa")).rejects.toThrow();
    })

})

