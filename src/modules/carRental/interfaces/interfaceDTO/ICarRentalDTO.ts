import { DriverDTO } from '@modules/driver/dto/DriverDTO'
import { AutomobileDTO } from '@modules/automobiles/dto/AutomobileDTO'

interface ICarRentalDTO {
    dataInicio?: Date;
    dataFinalizacao?: Date;
    descricao: string;
    motorista: DriverDTO;
    carro: AutomobileDTO
}
export { ICarRentalDTO }