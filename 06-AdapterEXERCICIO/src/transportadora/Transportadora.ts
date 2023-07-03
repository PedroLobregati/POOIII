import ITransportadoraManegement from "./ITransportadoraManegement";

export default class Transportadora implements ITransportadoraManegement{
    send(): void {
        console.log("Transportadora enviando mercadoria...");
    }
    receive(): void {
        console.log("Transportadora recebendo mercadoria...")
    }

}