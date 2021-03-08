import { DriverDTO } from '@modules/driver/dto/DriverDTO'
import { AutomobileDTO } from '@modules/automobiles/dto/AutomobileDTO'

interface CarRentalDTO {
    dataInicio: Date;
    descricao: string;
    motorista: DriverDTO;
    carro: AutomobileDTO
}
export { CarRentalDTO };