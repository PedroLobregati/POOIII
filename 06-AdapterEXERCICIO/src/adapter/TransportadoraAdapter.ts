import ICorreiosManagement from "../correios/ICorreiosManagement";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreiosManagement{
    constructor(private transportadora : Transportadora){}
    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
        this.transportadora.receive();
    }
    

}