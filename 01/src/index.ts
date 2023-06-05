import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

var endereco1 : Endereco = new Endereco("Afonso", 885, "Guarapuava", "PR");
var telefone1 : Telefone[] = [new Telefone("42", 99916029, "pessoal")];
var cliente1 : Cliente = new Cliente("Pedro", 1135678, 210302, "Masculino", endereco1, telefone1);

var produtos1 : Produto[]= [new Produto(3719, "Camisa Polo", 80),
                            new Produto(8253, "Tenis Puma", 150),
                            new Produto(7210, "Blusa Nike", 200)];

var venda1 : Venda = new Venda(23, 150623, cliente1, produtos1);

console.log(venda1.calcularTotal());