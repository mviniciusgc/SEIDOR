import { container } from 'tsyringe';

import { IAutomobileRepository } from '@modules/automobiles/interfaces/interfaceRepository/IAutomobileRepository';
import { AutomobileRepository } from '@modules/automobiles/repository/AutomobileRepository';

import { IDriverRepository } from '@modules/driver/interfaces/interfaceRepository/IDriverRepository';
import { DriverRepository } from '@modules/driver/repository/DriverRepository';

import { ICarRentalRepository } from '@modules/carRental/interfaces/interfaceRepository/ICarRentalRepository';
import { CarRentalRepository } from '@modules/carRental/repository/CarRentalRepository';


 container.registerSingleton<IAutomobileRepository>('AutomobileRepository', AutomobileRepository);
 container.registerSingleton<IDriverRepository>('DriverRepository', DriverRepository);
 container.registerSingleton<ICarRentalRepository>('CarRentalRepository', CarRentalRepository);