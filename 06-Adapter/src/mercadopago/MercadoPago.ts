import Token from "../utils/Token";
import IMercadoPagoPayments from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayments{
    private _token : Token;
    authToken(): Token {
        return new Token();
    }
    mpSendPayment(): void {
        this._token = this.authToken();
        console.log("Token: " + this._token.token)
        console.log("Realizando pagamento via Mercado Pago");
    }
    mpReceivePayment(): void {
        this._token = this.authToken();
        console.log("Token: " + this._token.token)
        console.log("Recebendo pagamento via Mercado Pago");
    }

}