import { Router } from 'express';
import { driverRouter } from '@modules/driver/infra/http/route/driver.route'
import { automobileRouter } from '@modules/automobiles/infra/http/route/Automobile.route'
import { carRentalRouter } from '@modules/carRental/infra/http/route/CarRental.route'

const routes = Router();
routes.use('/driver', driverRouter);
routes.use('/automobile', automobileRouter);
routes.use('/carRental', carRentalRouter);

export { routes };