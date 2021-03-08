import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateAutomobileServer } from '@modules/automobiles/services/CreateAutomobileServer'
import { UpdateAutomobileServer } from '@modules/automobiles/services/UpdateAutomobileServer'
import { FindAutomobileServer } from '@modules/automobiles/services/FindAutomobilesServer'
import { FindAllAutomobileServer } from '@modules/automobiles/services/FindAllAutomobilesServer'
import { DeleteAutomobileServer } from '@modules/automobiles/services/DeleteAutomobileServer'


class AutomobileController {

    public async create(request: Request, response: Response): Promise<Response> {
        const { placa, cor, marca } = request.body;
        const createAutomobile = container.resolve(CreateAutomobileServer)
        const newAutomobile = { placa, cor, marca }
        const automobile = await createAutomobile.execute(newAutomobile)
        // delete driver.id;
        return response.json(automobile);

    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id, placa, cor, marca } = request.body;
        const updateAutomobileServer = container.resolve(UpdateAutomobileServer)
        const updateAutomobile = { id, placa, cor, marca }
        const automobile = await updateAutomobileServer.execute(updateAutomobile)
        // delete driver.id;
        return response.json(automobile);

    }

    public async find(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        const findAutomobile = container.resolve(FindAutomobileServer)
        const automobile = await findAutomobile.execute(id)
        return response.json(automobile);

    }

    public async findAll(request: Request, response: Response): Promise<Response> {
        const { cor,marca } = request.body;
        const findAllautomobile = container.resolve(FindAllAutomobileServer)
        const filterAutomobile = { cor,marca }
        const automobile = await findAllautomobile.execute(filterAutomobile)
        return response.json(automobile);

    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        const deleteAutomobile = container.resolve(DeleteAutomobileServer)
        const automobile = await deleteAutomobile.execute(id)
        return response.json(automobile);

    }


}

export { AutomobileController }