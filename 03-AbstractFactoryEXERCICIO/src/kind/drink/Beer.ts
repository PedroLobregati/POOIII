import IDrink from "./interface/IDrink";

export default class Beer implements IDrink{
    startCooking(): void {
        console.log("Barmen produzindo cerveja...");
    }
    checkTemperature(): void {
        console.log("Temperatura da cerveja ok");
    }
    
}