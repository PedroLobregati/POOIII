import Beer from "../kind/drink/Beer";
import Hamburguer from "../kind/food/Hamburguer";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class IAiqFomeDeliveryFactory implements IDeliveryFactory{
    createDeliveryDrink() {
        console.log("AiqFome factory criando Beer...");
        return new Beer();
    }
    createDeliveryFood() {
        console.log("AiqFome factory criando Hamburguer...");
        return new Hamburguer();
    }

}