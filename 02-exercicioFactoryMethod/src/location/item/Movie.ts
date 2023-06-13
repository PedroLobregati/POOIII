import Iitem from "./interface/Iitem";

export default class Movie implements Iitem{
    start(): void {
        this.getDescription();
        console.log("Locacao de filme...");
    }
    getDescription(): void {
        console.log("Filme ABCDEFG do dia 13");    
    }
    
}