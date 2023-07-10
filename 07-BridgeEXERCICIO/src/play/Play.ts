import IConsole from "../platform/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay{

    constructor(private console : IConsole){}
    playing() : void{
        console.log("Iniciando jogatina...");
    }

    result() : void{
        console.log("Mostrando resultado...");
    }
}