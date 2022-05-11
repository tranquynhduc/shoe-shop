import { CHECKOUT_CREATE } from "../constants/checkoutConstants";

const createCheckout = (data) => {
  return { type: CHECKOUT_CREATE, payload: data };
};

export { createCheckout };
