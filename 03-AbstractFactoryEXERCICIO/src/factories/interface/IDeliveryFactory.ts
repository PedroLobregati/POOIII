import IDrink from "../../kind/drink/interface/IDrink";
import IFood from "../../kind/food/interface/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink() : IDrink;
    createDeliveryFood() : IFood;
}