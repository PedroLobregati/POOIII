import Client from "./clients/Client";
import LimeFactory from "./factories/LimeFactory";
import NineNineFactory from "./factories/NineNineFactory";
import UberFactory from "./factories/UberFactory";
import ITransportFactory from "./factories/interfaces/ITransportFactory";
import Company from "./vehicles/consts/Company";

const currentCompany = Company.UBER;
let factory! : ITransportFactory;

switch(currentCompany){
    case Company.UBER:
        factory = new UberFactory;
        break;
    case Company.NINENINE:
        factory = new NineNineFactory;
        break;
    case Company.LIME:
        factory = new LimeFactory;
        break;
    default:
        console.log("Companhia nao definida!");
}

const client = new Client(factory, "A", "Drone");

client.startRoute();