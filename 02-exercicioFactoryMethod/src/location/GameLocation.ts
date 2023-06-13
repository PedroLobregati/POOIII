import Game from "./item/Game";
import Iitem from "./item/interface/Iitem";
import Location from "./Location";

export default class GameLocation extends Location{
    protected createItem(): Iitem {
        return new Game();
    }
    
}