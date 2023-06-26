import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog()
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Sanduiche pao: " + hotdog.bread)
console.log("Sanduiche  peso proteico: " + hotdog.protein.weight)
console.log("Sanduiche nome proteina: " + hotdog.protein.name)
console.log("Sanduiche salada : " + hotdog.salad)
console.log("Sanduiche tipo : " + hotdog.sanduicheType)
console.log("Sanduiche molhos: " + hotdog.sauces.length)

console.log("---------------------------------")

director.constructXSalada();
const xsalada : Sanduiche = builder.getSanduiche();
console.log("Sanduiche pao: " + xsalada.bread)
console.log("Sanduiche  peso proteico: " + xsalada.protein.weight)
console.log("Sanduiche nome proteina: " + xsalada.protein.name )
console.log("Sanduiche salada : " + xsalada.salad)
console.log("Sanduiche tipo : " + xsalada.sanduicheType)
console.log("Sanduiche molhos: " + xsalada.sauces.length)