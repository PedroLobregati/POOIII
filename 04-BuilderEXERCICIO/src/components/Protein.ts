export default class Protein {

    constructor( private _weight : number, private _name : string){}

    get weight() : number{
        return this._weight;
    }
    
    get name() : string{
        return this._name;
    }
    
}