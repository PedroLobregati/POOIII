import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayments from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayments{
    
    constructor(private mercadoPago : MercadoPago){}

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.mercadoPago.mpSendPayment();
    }
    paypalReiceve(): void {
        return this.mercadoPago.mpReceivePayment();
    }

}