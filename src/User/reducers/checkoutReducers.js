import { CHECKOUT_CREATE } from "../constants/checkoutConstants";

const checkoutReducer = (
  state = {
    checkoutList: [],
  },
  action
) => {
  switch (action.type) {
    case CHECKOUT_CREATE:
      return { checkoutList: [...state.checkoutList, action.payload] };

    default:
      return state;
  }
};

export { checkoutReducer };
