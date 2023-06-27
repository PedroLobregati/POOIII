import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import IPayoneerPayment from "./payoneer/IPayoneerPayment";
import Payoneer from "./payoneer/Payoneer";
import IPayPalPayments from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

const pagamento = new PayPal();
pagamento.paypalPayment();
pagamento.paypalReiceve();

const payment2 : IPayPalPayments = new PayoneerAdapter(new Payoneer());
payment2.paypalPayment();
payment2.paypalReiceve();

const payment3 : IPayPalPayments = new MercadoPagoAdapter(new MercadoPago());
payment3.paypalPayment();
payment3.paypalReiceve();