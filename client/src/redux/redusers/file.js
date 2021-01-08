const setFiles ="SET_FILES"
const setCurrentDir = "SET_CURRENT_DIR";


const initialState = {
  files: [],
  currentDir: null
};

const file = (state = initialState, action) => {
  switch (action.type) {
    case setFiles: {
      return {
        ...state,
        files: action.payload,
      };
    }

    case setCurrentDir: {
      return {
        ...state,
        currentDir: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default file;