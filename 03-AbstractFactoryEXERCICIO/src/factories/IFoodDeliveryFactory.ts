import SoftDrink from "../kind/drink/SoftDrink";
import HotDog from "../kind/food/HotDog";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class IFoodDeliveryFactory implements IDeliveryFactory{
    createDeliveryDrink() {
        console.log("IFood factory criando SoftDrink...");
        return new SoftDrink();
    }
    createDeliveryFood() {
        console.log("IFood factory criando HotDog...");
        return new HotDog();
    }
    
}