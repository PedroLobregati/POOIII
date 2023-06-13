import GameLocation from "./location/GameLocation";
import MovieLocation from "./location/MovieLocation";
import Location from "./location/Location";

declare var process;

let location : Location;
if(process.argv.includes("--game")){
    location = new GameLocation();
    location.startItem();

}else if(process.argv.includes("--movie")){
    location = new MovieLocation();
    location.startItem();

}
else{
    console.log("Selecione o tipo de item");
}