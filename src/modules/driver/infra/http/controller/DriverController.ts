import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateDriverServer } from '@modules/driver/services/CreateDriverServer'
import { UpdateDriverServer } from '@modules/driver/services/UpdateDriverServer'
import { FindDriverServer } from '@modules/driver/services/FindDriverServer'
import { FindAllDriverServer } from '@modules/driver/services/FindAllDriverServer'
import { DeleteDriverServer } from '@modules/driver/services/DeleteDriverServer'


class DriverController {

    public async create(request: Request, response: Response): Promise<Response> {
        const { nome } = request.body;
        const createDriver = container.resolve(CreateDriverServer)
        const newDriver = { nome }
        const driver = await createDriver.execute(newDriver)
        // delete driver.id;
        return response.json(driver);

    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { nome, id } = request.body;
        const updateDriver = container.resolve(UpdateDriverServer)
        const newDriver = { id, nome }
        const driver = await updateDriver.execute(newDriver)
        // delete driver.id;
        return response.json(driver);

    }

    public async find(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        const findDriver = container.resolve(FindDriverServer)
        const driver = await findDriver.execute(id)
        return response.json(driver);

    }

    public async findAll(request: Request, response: Response): Promise<Response> {
        const { nome } = request.body;
        const findAllDriver = container.resolve(FindAllDriverServer)
        const filterDriver = {nome }
        const driver = await findAllDriver.execute(filterDriver)
        return response.json(driver);

    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        const deleteDriver = container.resolve(DeleteDriverServer)
        const driver = await deleteDriver.execute(id)
        return response.json(driver);

    }


}

export { DriverController }