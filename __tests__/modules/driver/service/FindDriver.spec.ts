import 'reflect-metadata';
import { DriverRepository } from '../repositories/DriverRepository'
import { CreateDriverServer } from '@modules/driver/services/CreateDriverServer'
import { FindDriverServer } from '@modules/driver/services/FindDriverServer'
import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'


describe('find Automobiles', () => {

    let fakeDriveRepository: DriverRepository;
    let createDriverServer: CreateDriverServer;
    let findFindDriverServer: FindDriverServer;

    beforeEach(() => {
        fakeDriveRepository = new DriverRepository();
        createDriverServer = new CreateDriverServer(fakeDriveRepository);
        findFindDriverServer = new FindDriverServer(fakeDriveRepository)
    })

    it('should be able find automobile by id', async () => {

        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }

        const newDriver = await createDriverServer.execute(driver)


        expect(await findFindDriverServer.execute(newDriver.id as string)).toEqual(newDriver);
    })


})

