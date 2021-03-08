import 'reflect-metadata';
import { CarRentalRepository } from '../repositories/CarRentalRepository'
import { CreateCarRentalServer } from '@modules/carRental/services/CreateCarRentalServer'
import { IDriver } from '@modules/driver/interfaces/interfaceDTO/IDriverDTO'
import { CreateAutomobileServer } from '@modules/automobiles/services/CreateAutomobileServer'
import { AutomobileRepository } from '../../automobiles/repositories/AutomobileRepository'
import { IAutomobile } from '@modules/automobiles/interfaces/interfaceDTO/IAutomobileDTO'
import { DriverRepository } from '../../driver/repositories/DriverRepository'
import { CreateDriverServer } from '@modules/driver/services/CreateDriverServer'



describe('Create carRental', () => {

    let fakeCarRentalRepository: CarRentalRepository;
    let createCarRentalServer: CreateCarRentalServer;

    let fakeAutomobileRepository: AutomobileRepository;
    let createAutomobileServer: CreateAutomobileServer;

    let fakeDriverRepository: DriverRepository;
    let createDriverServer: CreateDriverServer;

    beforeEach(() => {

        fakeAutomobileRepository = new AutomobileRepository();
        createAutomobileServer = new CreateAutomobileServer(fakeAutomobileRepository);

        fakeDriverRepository = new DriverRepository();
        createDriverServer = new CreateDriverServer(fakeDriverRepository);

        fakeCarRentalRepository = new CarRentalRepository();
        createCarRentalServer = new CreateCarRentalServer(fakeCarRentalRepository);
    })

    it('should be able create a new carRental', async () => {
        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }

        const newDriver = await createDriverServer.execute(driver)

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }

        const newAutomobile = await createAutomobileServer.execute(automobile)
        const carRental = await createCarRentalServer.execute(newDriver, newAutomobile, 'Aluguel de carro')
        expect(carRental).toHaveProperty('id');

    })

    it('should not be able to create a new lease for more than one vehicle, for a driver', async () => {
        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }
        const newDriver = await createDriverServer.execute(driver)
        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }
        const newAutomobile = await createAutomobileServer.execute(automobile)

        const automobile2: IAutomobile = {
            placa: "asd2656",
            cor: "branco",
            marca: "honda"
        }
        const newAutomobile2 = await createAutomobileServer.execute(automobile2)

        await createCarRentalServer.execute(newDriver, newAutomobile, 'Aluguel de carro')

        await expect(createCarRentalServer.execute(newDriver, newAutomobile2, 'Aluguel de carro')).rejects.toThrow();


    })


    it('should not be able to create a new lease idDriver not found', async () => {
        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }
        const newDriver = await createDriverServer.execute(driver)

        const driver2: IDriver = {
            nome: "Marcos Vinicius 2"
        }
        
        await createDriverServer.execute(driver)

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }
        const newAutomobile = await createAutomobileServer.execute(automobile)

        const automobile2: IAutomobile = {
            placa: "asd2656",
            cor: "branco",
            marca: "honda"
        }
      
        await createAutomobileServer.execute(automobile2)

        await createCarRentalServer.execute(newDriver, newAutomobile, 'Aluguel de carro')

        await expect(createCarRentalServer.execute(driver2, automobile2, 'Aluguel de carro')).rejects.toThrow();


    })

    it('must not be able to create a new lease for more than one vehicle, already rented', async () => {
        const driver: IDriver = {
            nome: "Marcos Vinicius"
        }
        const newDriver = await createDriverServer.execute(driver)

        const driver2: IDriver = {
            nome: "Marcos Vinicius 2"
        }
        const newDriver2 = await createDriverServer.execute(driver)

        const automobile: IAutomobile = {
            placa: "hgd2563",
            cor: "vermelho",
            marca: "honda"
        }
        const newAutomobile = await createAutomobileServer.execute(automobile)

        const automobile2: IAutomobile = {
            placa: "asd2656",
            cor: "branco",
            marca: "honda"
        }
        await createAutomobileServer.execute(automobile2)

        await createCarRentalServer.execute(newDriver,newAutomobile,'Aluguel de carro')

        await expect(createCarRentalServer.execute(newDriver2,newAutomobile,'Aluguel de carro')).rejects.toThrow();


    })
})

