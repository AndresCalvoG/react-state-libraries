import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: { payload: {} },
    cartProducts: [],
    loading: false,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    setSelectedProduct: (state, payload) => {
      state.selectedProduct = payload.payload;
    },
    setChange: (state, payload) => {
      state.cartProducts = payload.payload;
    },
    setFinish: (state) => {
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  setProducts,
  setSelectedProduct,
  setChange,
  setFinish,
} = productSlice.actions;

export default productSlice.reducer;

export const selectProduct = (id, array) => {
  const product = array.find((e) => {
    return e.id === id;
  });
  //console.log(product);
  return (dispatch) => dispatch(setSelectedProduct(product));
};

export const addToCart = (id, array, products) => {
  const product = array.find((e) => {
    return e.id === id;
  });
  return (dispatch) => dispatch(setChange([...products, product]));
};

export const deleteFromCart = (index, cartProducts) => (dispatch) => {
  dispatch(setLoading());
  let newCartProducts = [...cartProducts];
  newCartProducts.splice(index, 1);
  //console.log(newCartProducts);
  dispatch(setChange(newCartProducts));
  const timer = setTimeout(() => {
    dispatch(setFinish());
  }, 1000);
};
