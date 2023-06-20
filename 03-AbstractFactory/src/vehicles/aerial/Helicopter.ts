import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicoptero: Iniciando decolagem...");
    }
    getCargo(): void {
        console.log("Helicoptero: Passageiros embarcados! Ligando hélices!");
    }
    checkWind(): void {
        console.log("Helicoptero: Ventos a 22km, Sudoeste, ventos ok!");
    }
    
}