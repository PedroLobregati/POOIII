import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando trajeto...");
    }
    getCargo(): void {
        console.log("Drone: drone recebendo carga...");
    }
    checkWind(): void {
        console.log("Drone: Checando vento, 22km/h");
    }
    
}