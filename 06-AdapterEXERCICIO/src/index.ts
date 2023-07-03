import TransportadoraAdapter from "./adapter/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreiosManagement from "./correios/ICorreiosManagement";
import Transportadora from "./transportadora/Transportadora";

const correios : Correios = new Correios();

console.log("Implementando correio:");

correios.receiveCorreios();
correios.sendCorreios();

console.log("Fazendo adaptação para Transportadora:");

const transportadora : ICorreiosManagement = new TransportadoraAdapter(new Transportadora());
transportadora.receiveCorreios();
transportadora.sendCorreios();

