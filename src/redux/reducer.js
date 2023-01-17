import { ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM } from "./action";

export const reducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    const alreadyExist = state.cart.find(
      (item) => item.id === action.payload.id
    );
    const newCart = alreadyExist
      ? state.cart.map((item) =>
          item.id === alreadyExist.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      : [...state.cart, { ...action.payload, qty: 1 }];
    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === DECREASE_ITEM) {
    const alreadyExist = state.cart.find(
      (item) => item.id === action.payload.id
    );
    const newCart =
      alreadyExist.qty === 1
        ? state.cart.filter((item) => item.id !== alreadyExist.id)
        : state.cart.map((item) =>
            item.id === alreadyExist.id
              ? {
                  ...item,
                  qty: item.qty - 1,
                }
              : item
          );
    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload.id)
    }
  }
  return state;
};
