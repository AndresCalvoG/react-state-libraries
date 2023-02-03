import { create } from "zustand";

export const useGlobalState = create((set, get) => ({
  products: [],
  selectedProduct: {},
  cartProducts: [],
  loading: false,
  setLoading: (value) =>
    set((state) => ({
      ...state,
      loading: value,
    })),
  setCartProducts: (value) =>
    set((state) => ({
      ...state,
      cartProducts: value,
    })),
  setSelectedProduct: (value) =>
    set((state) => ({
      ...state,
      selectedProduct: value,
    })),
  setProducts: (value) =>
    set((state) => ({
      ...state,
      products: value,
    })),
}));
