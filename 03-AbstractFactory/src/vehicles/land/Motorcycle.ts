import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando trajeto...");
    }
    getCargo(): void {
        console.log("Moto: Encomenda retirada");
    }
    
}