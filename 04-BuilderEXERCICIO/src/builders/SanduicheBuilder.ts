import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche();
    reset(): void {
        this.sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(st: SanduicheType) {
        this.sanduiche.sanduicheType = st;
    }
    setBread(bread1: Bread) {
        this.sanduiche.bread = bread1;
    }
    setProtein(protein1: Protein) {
        this.sanduiche.protein = protein1;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad;
    }
    addSauces(sauce: Sauce) {
       this.sanduiche.addSauce(sauce);
    }
    
}