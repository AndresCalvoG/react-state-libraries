const initialState = {
  products: [],
  cartProducts: [],
  selectedProduct: {},
  loading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
