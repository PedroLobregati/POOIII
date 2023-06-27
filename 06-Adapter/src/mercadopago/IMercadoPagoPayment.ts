import Token from "../utils/Token";

export default interface IMercadoPagoPayments{
    authToken() : Token;
    mpSendPayment() : void;
    mpReceivePayment() : void;
}