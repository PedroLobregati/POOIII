import BicycleTransport from "./transport/BicycleTransport";
import CarTransport from "./transport/CarTransport";
import MotocycleTransport from "./transport/MotocycleTransport";
import Transport from "./transport/Transport";

declare var process;

let transport : Transport;
if(process.argv.includes("--uber")){
    transport = new CarTransport();
    transport.startTransport();

}else if(process.argv.includes("--eats")){
    transport = new MotocycleTransport();
    transport.startTransport();

}else if (process.argv.includes("--bike")){
    transport = new BicycleTransport();
    transport.startTransport();
}
else{
    console.log("Selecione o tipo de transporte");
}