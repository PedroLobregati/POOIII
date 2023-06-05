import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda{
    private codigo : number;
    private data : number;
    private cliente : Cliente;
    private produtos : Produto[];

    constructor (codigo : number, data : number, cliente : Cliente, produtos : Produto[]){
        this.codigo = codigo;
        this.data = data;
        this.cliente = cliente;
        this.produtos = produtos;
    }
    
    calcularTotal() : number {
        var total : number = 0;
        for(let i of this.produtos){
            total = total + i.valor;
        }
        return total;
    }
}