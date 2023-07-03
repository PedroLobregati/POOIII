import ICorreiosManagement from "./ICorreiosManagement";

export default class Correios implements ICorreiosManagement{
    sendCorreios(): void {
        console.log("Enviando por Correios...");
    }
    receiveCorreios(): void {
        console.log("Recebendo por Correios...");
    }

}