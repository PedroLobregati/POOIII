import Airplane from "../vehicles/aerial/Airplane";
import Drone from "../vehicles/aerial/Drone";
import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Car from "../vehicles/land/Car";
import Motorcycle from "../vehicles/land/Motorcycle";
import Scooter from "../vehicles/land/Scooter";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeFactory implements ITransportFactory{

    createTransportVehicle(transporte: string): ILandVehicle {
        if (transporte == "Scooter")
            return new Scooter();
        else if (transporte == "Car")
            return new Car();
            else
                return new Motorcycle;
    }
    createTransportAircraft(transporte: string): IAircraft {
        if (transporte == "Drone")
            return new Drone();
        else if (transporte == "Airplane")
            return new Airplane();
            else 
                return new Helicopter();
    }
    
}