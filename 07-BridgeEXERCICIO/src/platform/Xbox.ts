import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
        console.log("Iniciando no Xbox");
        this.configureGame();
    }

    configureGame(): void {
        console.log("Xbox: Configurando jogo...");
    }
    authToken(): void {
        console.log("Xox: Autenticando token");
    }

}