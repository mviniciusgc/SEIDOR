import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateCarRentalServer } from '@modules/carRental/services/CreateCarRentalServer'


class CarRentalController {

    public async create(request: Request, response: Response): Promise<Response> {

        const { driver, automobile, descricaoUtilizacao } = request.body;
        const createCarRental = container.resolve(CreateCarRentalServer)
        const carRental = await createCarRental.execute(driver, automobile, descricaoUtilizacao)
        // delete driver.id;
        return response.json(carRental);

    }

}

export { CarRentalController }