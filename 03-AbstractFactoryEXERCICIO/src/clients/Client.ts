import IDeliveryFactory from "../factories/interface/IDeliveryFactory";
import IDrink from "../kind/drink/interface/IDrink";
import IFood from "../kind/food/interface/IFood";

export default class Client{
    private food : IFood;
    private drink : IDrink;

    constructor(factory : IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }
    startDelivery() : void{
        this.drink.startCooking();
        this.drink.checkTemperature();
        console.log("Iniciando Delivery...");

        this.food.startCooking();
        this.food.checkWrapping();
        console.log("Iniciando Delivery...");

    }
}