import { Router } from 'express';
import { CarRentalController } from '../controller/CarRentalController'

const carRentalRouter = Router();
const carRentalController = new CarRentalController()

carRentalRouter.post('/', carRentalController.create)

export { carRentalRouter };