import Iitem from "./interface/Iitem";

export default class Game implements Iitem{
    start(): void {
        this.getDescription();
        console.log("Locacao de jogo...");
    }
    getDescription(): void {
        console.log("Jogo ABCDEFG no dia 13");    
    }

}