import 'reflect-metadata';
import { DriverRepository } from '../repositories/DriverRepository'
import { CreateDriverServer } from '@modules/driver/services/CreateDriverServer'
import { UpdateDriverServer } from '@modules/driver/services/UpdateDriverServer'
import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'

describe('Update driver', () => {

    let fakeDriverRepository: DriverRepository;
    let createDriverServer: CreateDriverServer;
    let updateDriverServer: UpdateDriverServer;

    beforeEach(() => {
        fakeDriverRepository = new DriverRepository();
        createDriverServer = new CreateDriverServer(fakeDriverRepository);
        updateDriverServer = new UpdateDriverServer(fakeDriverRepository)
    })

    it('should be able update a automobile', async () => {

        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }

        const newDriver = await createDriverServer.execute(driver)

        const updateDriver: IDriver = {
            id: newDriver.id,
            nome: "Marcos Vinicius Atualizado",

        }
        expect(await updateDriverServer.execute(updateDriver)).toEqual(updateDriver);
    })

    it('not should be able to update a drive, drive is not exist', async () => {

        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }

        const newDriver = await createDriverServer.execute(driver)

        const updateDriver: IDriver = {
            id: "novo",
            nome: "Marcos Vinicius Atualizado",

        }
        await expect(updateDriverServer.execute(updateDriver)).rejects.toThrow();
    })

    it('not should be able to update a drive, id is not exist', async () => {

        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }

        const newDriver = await createDriverServer.execute(driver)

        const updateDriver: IDriver = {
            id: undefined,
            nome: "Marcos Vinicius Atualizado",

        }
 
        await expect(updateDriverServer.execute(updateDriver)).rejects.toThrow();
    })

})

