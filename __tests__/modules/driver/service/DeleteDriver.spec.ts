import 'reflect-metadata';
import { DriverRepository } from '../repositories/DriverRepository'
import { CreateDriverServer } from '@modules/driver/services/CreateDriverServer'
import { DeleteDriverServer } from '@modules/driver/services/DeleteDriverServer'
import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'

describe('Delete Automobiles', () => {

    let fakeDriverRepository: DriverRepository;
    let createDriverServer: CreateDriverServer;
    let deleteDriverServer: DeleteDriverServer;

    beforeEach(() => {
        fakeDriverRepository = new DriverRepository();
        createDriverServer = new CreateDriverServer(fakeDriverRepository);
        deleteDriverServer = new DeleteDriverServer(fakeDriverRepository)
    })

    it('should be able delete a automobile', async () => {

        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }
        const driver2: IDriver = {
            nome: "Marcos Cunha"
        }

        const newDriver = await createDriverServer.execute(driver)
        const newDriver2 = await createDriverServer.execute(driver2)
    

        expect(await deleteDriverServer.execute(newDriver2.id as string)).toEqual(expect.arrayContaining([newDriver]));
    })

    it('not should be able to delete a drive, drive is not exist', async () => {

        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }
        const driver2: IDriver = {
            nome: "Marcos Cunha"
        }

        const newDriver = await createDriverServer.execute(driver)
        const newDriver2 = await createDriverServer.execute(driver2)


        await expect(deleteDriverServer.execute("Casa")).rejects.toThrow();
    })

})

