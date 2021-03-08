import 'reflect-metadata';
import { DriverRepository } from '../repositories/DriverRepository'
import { CreateDriverServer } from '@modules/driver/services/CreateDriverServer'
import { FindAllDriverServer } from '@modules/driver/services/FindAllDriverServer'
import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'
import { IFilterAutomobile } from '@modules/automobiles/interfaces/filters/IFilterAutomobile'

describe('Find all Automobiles', () => {

    let fakeDriverRepository: DriverRepository;
    let createDriverServer: CreateDriverServer;
    let findAllDriverServer: FindAllDriverServer;

    beforeEach(() => {
        fakeDriverRepository = new DriverRepository();
        createDriverServer = new CreateDriverServer(fakeDriverRepository);
        findAllDriverServer = new FindAllDriverServer(fakeDriverRepository)
    })

    it('should be able list a driver', async () => {

        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }
        const driver2: IDriver = {
            nome: "Marcos Cunha"
        }
        const driver3: IDriver = {
            nome: "Marcos Cunha"
        }

        const newDriver = await createDriverServer.execute(driver)
        const newDriver2 = await createDriverServer.execute(driver2)
        const newDriver3 = await createDriverServer.execute(driver3)

        expect(await findAllDriverServer.execute(newDriver2)).toEqual(expect.arrayContaining([newDriver2,newDriver3]));
    })


})

