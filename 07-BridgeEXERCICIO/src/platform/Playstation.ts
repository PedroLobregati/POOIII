import IConsole from "./IConsole";

export default class Playstation implements IConsole{
    constructor(){
        console.log("Iniciando no Playstation");
        this.configureGame();
    }
    configureGame(): void {
        console.log("Playstation: Configurando jogo...");
        this.authToken();
    }
    authToken(): void {
        console.log("Playstation: autenticando token...");
    }

}