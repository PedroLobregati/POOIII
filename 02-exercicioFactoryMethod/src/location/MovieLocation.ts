import Movie from "./item/Movie";
import Iitem from "./item/interface/Iitem";
import Location from "./Location";

export default class MovieLocation extends Location{
    
    protected createItem(): Iitem {
        return new Movie();
    }
    
}