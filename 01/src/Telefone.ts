export default class Telefone{
    private ddd : string;
    private numero : number;
    private tipo : string;

    constructor (ddd : string, numero : number, tipo : string){
        this.ddd = ddd;
        this.numero = numero;
        this.tipo = tipo;
    }
}