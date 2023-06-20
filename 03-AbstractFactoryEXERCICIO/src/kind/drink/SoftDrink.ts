import IDrink from "./interface/IDrink";

export default class SoftDrink implements IDrink{
    startCooking(): void {
        console.log("Barmen Fazendo bebida leve...");
    }
    checkTemperature(): void {
        console.log("Temperatura da bebida ok");
    }
    
}