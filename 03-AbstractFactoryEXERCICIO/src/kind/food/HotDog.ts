import IFood from "./interface/IFood";

export default class HotDog implements IFood{
    startCooking(): void {
        console.log("Iniciando preparacao do Hot Dog...");
    }
    checkWrapping(): void {
        console.log("Embalando Hot Dog para entrega!");
    }
    
}