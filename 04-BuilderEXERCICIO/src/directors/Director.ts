import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor (private _ibuilder : IBuilder){}

    constructHotDog() : void{
        this._ibuilder.getSanduiche();
        this._ibuilder.setBread(Bread.FRANCES);
        this._ibuilder.setProtein(new Protein(1500, "carboidrato"));
        this._ibuilder.setSalad(Salad.TOMATE);
        this._ibuilder.setSanduicheType(SanduicheType.HOTDOG);
        this._ibuilder.addSauces(new Sauce("Ketchup"));
        this._ibuilder.addSauces(new Sauce("Maionese"));
        this._ibuilder.addSauces(new Sauce("Mostarda"));
    }

    constructXSalada() : void{
        this._ibuilder.getSanduiche();
        this._ibuilder.setBread(Bread.FORMA);
        this._ibuilder.setProtein(new Protein(1400, "Aminoácido"));
        this._ibuilder.setSalad(Salad.ALFACE);
        this._ibuilder.setSanduicheType(SanduicheType.XSALADA);
        this._ibuilder.addSauces(new Sauce("Maionese"));
        this._ibuilder.addSauces(new Sauce("Barbecue"));
    }
}