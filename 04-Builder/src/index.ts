import { VehicleBuilder } from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructSedanCar();
const sedan : Vehicle = builder.getVehicle();
console.log("Veículo : " + sedan.vehicleType)
console.log("Veículo : " + sedan.engine.power)
console.log("Veículo : " + sedan.seats)
console.log("Veículo : " + sedan.transmission)
console.log("Veículo : " + sedan.wheels.length)

console.log("---------------------------------")

director.constructTruck();
const truck : Vehicle = builder.getVehicle();
console.log("Caminhao : " + truck.vehicleType)
console.log("Caminhao : " + truck.engine.power)
console.log("Caminhao : " + truck.seats)
console.log("Caminhao : " + truck.transmission)
console.log("Caminhao : " + truck.wheels.length)