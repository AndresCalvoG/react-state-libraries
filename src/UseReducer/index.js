// function UseReducer() {
//   const [state, dispatch] = React.useReducer(reducer, initialState);
// }

const initialState = {
  ERROR: {
    error: true,
  },
};

const reducerObject = (state) => ({
  Error: {
    ...state,
    error: true,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  } else {
    return state;
  }
};

export { reducer, initialState };
