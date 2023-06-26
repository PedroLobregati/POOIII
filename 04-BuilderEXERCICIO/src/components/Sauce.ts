export default class Sauce{
    constructor(private _name : string){}
    
    get name() : string{
        return this._name;
    }

    set name(nome : string){
        this._name = nome;
    }
}