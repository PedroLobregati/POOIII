import Token from "../utils/Token";
import IPayPalPayments from "./IPayPalPayment";

export default class PayPal implements IPayPalPayments{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token)
        console.log("Recebendo pagamento via PayPal");

    }
    paypalReiceve(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token)
        console.log("Enviando pagamento via PayPal");
    }
    
}