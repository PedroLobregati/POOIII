import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente {
    private nome : string;
    public cpf : number;
    private data_nascimento : number;
    private sexo : string;
    private endereco : Endereco;
    private telefones : Telefone[];

    constructor (nome : string, cpf : number, data_nascimento : number , sexo : string, endereco : Endereco, telefones : Telefone[]){
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.sexo = sexo;
        this.endereco = endereco;
        this.telefones = telefones;
    }
}