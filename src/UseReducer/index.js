const initialState = {
  products: [],
  selectedProduct: {},
  cartProducts: [],
  loading: false,
};

const actionsTypes = {
  loading: "LOADING",
  success: "SUCCESS",
  select: "SELECT",
  change: "CHANGE",
  finish: "FINISH",
};

const reducerObject = (state, payload) => ({
  [actionsTypes.loading]: {
    ...state,
    loading: true,
  },
  [actionsTypes.success]: {
    ...state,
    products: payload,
    loading: false,
  },
  [actionsTypes.select]: {
    ...state,
    selectedProduct: payload,
  },
  [actionsTypes.change]: {
    ...state,
    cartProducts: payload,
  },
  [actionsTypes.finish]: {
    ...state,
    loading: false,
  },
});

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { reducer, initialState, actionsTypes };
