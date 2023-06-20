import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Patinete: iniciando trajeto...");
    }
    getCargo(): void {
        console.log("Patinete: pegando carga!");
    }

}