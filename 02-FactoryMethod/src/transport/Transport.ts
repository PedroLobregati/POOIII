import IVehicle from "./vehile/interface/IVehicle";

export default abstract class Transport{
    startTransport() : void{
        const vehile = this.createTransport();
        vehile.startRoute();
    }
    
    protected abstract createTransport() : IVehicle;
}