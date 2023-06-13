import Transport from "./Transport";
import Motocycle from "./vehile/Motocycle";
import IVehicle from "./vehile/interface/IVehicle";

export default class MotocycleTransport extends Transport{
    
    protected createTransport(): IVehicle {
        return new Motocycle();
    }
    
}