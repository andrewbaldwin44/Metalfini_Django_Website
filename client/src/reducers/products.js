const initialState = {
  products: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCTS': {
      return {
        ...state,
        products: action.productData,
      }
    }

    default: {
      return state;
    }
  }
}
