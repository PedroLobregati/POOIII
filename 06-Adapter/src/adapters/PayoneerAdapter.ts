import Payoneer from "../payoneer/Payoneer";
import IPayPalPayments from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayments{
    private token : Token;

    constructor(private payoneer : Payoneer){
        console.log("Adaptando...");
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.payoneer.sendPayment();
    }
    paypalReiceve(): void {
        return this.payoneer.receivePayment();
    }

}