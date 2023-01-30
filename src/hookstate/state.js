import { hookstate, useHookstate } from "@hookstate/core";

const initialState = {
  products: [],
  selectedProduct: {},
  cartProducts: [],
  loading: false,
};

const store = hookstate(initialState);

export default store;
