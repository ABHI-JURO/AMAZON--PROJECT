import { renderOrderSummery } from "./checkout/orderSummery.js";
import { renderPaymentSummery } from "./checkout/paymentSummery.js";
import { loadProducts } from "../data/products.js";

//import "../data/cart-class.js";
//import '../data/backend-practice.js';

loadProducts(() => {
    renderOrderSummery();
    renderPaymentSummery();
});    
