import { Router } from 'express';
import { AutomobileController } from '../controller/AutomobileController'

const automobileRouter = Router();
const automobileController = new AutomobileController()


automobileRouter.post('/', automobileController.create)
automobileRouter.post('/update', automobileController.update)
automobileRouter.get('/find', automobileController.find)
automobileRouter.get('/findAll', automobileController.findAll)
automobileRouter.delete('/delete', automobileController.delete)


export { automobileRouter };