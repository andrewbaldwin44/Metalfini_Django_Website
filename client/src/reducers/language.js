const initialState = {
  language: 'English'
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LANGUAGE': {
      return {
        ...state,
        language: action.language,
      }
    }

    default: {
      return state;
    }
  }
}
