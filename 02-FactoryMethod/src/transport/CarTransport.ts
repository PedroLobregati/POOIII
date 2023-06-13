import Transport from "./Transport";
import Car from "./vehile/Car";
import IVehicle from "./vehile/interface/IVehicle";

export default class CarTransport extends Transport{
    
    protected createTransport(): IVehicle {
        return new Car();
    }
    
}