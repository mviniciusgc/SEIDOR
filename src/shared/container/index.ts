import { container } from 'tsyringe';

import { IAutomobileRepository } from '@modules/automobiles/interfaces/interfaceRepository/IAutomobileRepository';
import { AutomobileRepository } from '@modules/automobiles/repository/AutomobileRepository';

import { IDriverRepository } from '@modules/driver/interfaces/interfaceRepository/IDriverRepository';
import { DriverRepository } from '@modules/driver/repository/DriverRepository';


 container.registerSingleton<IAutomobileRepository>('AutomobileRepository', AutomobileRepository);
 container.registerSingleton<IDriverRepository>('DriverRepository', DriverRepository);