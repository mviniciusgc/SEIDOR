import 'reflect-metadata';
import { DriverRepository } from '../repositories/DriverRepository'
import { CreateDriverServer } from '@modules/driver/services/CreateDriverServer'
import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'

describe('Create Driver', () => {

    let fakeDriverRepository: DriverRepository;
    let createDriverServer: CreateDriverServer;

    beforeEach(() => {
        fakeDriverRepository = new DriverRepository();
        createDriverServer = new CreateDriverServer(fakeDriverRepository);
    })

    it('should be able create a new driver', async () => {
        const driver: IDriver = {
            nome:"Marcos Vinicius"
        }

        const newDriver = await createDriverServer.execute(driver)
        expect(newDriver).toHaveProperty('id');

    })
})

