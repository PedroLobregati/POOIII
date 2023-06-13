import Transport from "./Transport";
import Bicycle from "./vehile/Bicycle";
import IVehicle from "./vehile/interface/IVehicle";

export default class BicycleTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Bicycle();
    }
    
}