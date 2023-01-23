import { atom } from "recoil";

export const productsList = atom({
  key: "products",
  default: [],
});

export const cartProductsList = atom({
  key: "cartProducts",
  default: [],
});

export const loadingState = atom({
  key: "loading",
  default: false,
});

export const selectedProductState = atom({
  key: "selectedProduct",
  default: {},
});
