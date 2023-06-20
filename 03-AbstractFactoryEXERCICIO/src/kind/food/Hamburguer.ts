import IFood from "./interface/IFood";

export default class Hamburguer implements IFood{
    startCooking(): void {
        console.log("Iniciando preparacao do Hamburguer...");
    }
    checkWrapping(): void {
        console.log("Embalando hamburguer para entrega!");
    }
    
}