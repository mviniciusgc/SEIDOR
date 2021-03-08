import { Router } from 'express';
import { DriverController } from '../controller/DriverController'

const driverRouter = Router();
const driverController = new DriverController()


driverRouter.post('/', driverController.create)
driverRouter.post('/update', driverController.update)
driverRouter.get('/find', driverController.find)
driverRouter.get('/findAll', driverController.findAll)
driverRouter.delete('/delete', driverController.delete)


export { driverRouter };