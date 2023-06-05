export default class Produto{
    private _codigo : number;
    private _descricao : string;
    private _valor : number;

    constructor(codigo : number, descricao : string, valor : number){
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
    }

    public get valor(){
        return this._valor;

    }
}