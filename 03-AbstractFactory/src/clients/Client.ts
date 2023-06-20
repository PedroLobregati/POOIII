import ITransportFactory from "../factories/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;
    private tipo: string

    constructor(factory : ITransportFactory, tipo: string, veiculo: string){
        if (tipo == "T"){
            this.tipo = tipo;
            this.vehicle = factory.createTransportVehicle(veiculo);
        }
        else if(tipo == "A"){
            this.tipo = tipo;
            this.aircraft = factory.createTransportAircraft(veiculo);
        }
            else{
                this.vehicle = factory.createTransportVehicle(veiculo);
                this.aircraft = factory.createTransportAircraft(veiculo);
            }
    }

    startRoute(){
        if(this.tipo == "T")
            this.vehicle.startRoute();
        else if (this.tipo == "A")
            this.aircraft.startRoute();
            else{
                this.vehicle.startRoute();
                this.aircraft.startRoute();
            }
    }
} 