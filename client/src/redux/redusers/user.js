const setUser ="SET_USER"
const logout ="LOGOUT"

const initialState = {
  currentUser: {},
  isAuth: false,
  loader: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case setUser: {
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true
      };
    }

    case logout: {
      localStorage.removeItem("token")
      return {
        ...state,
        currentUser: {},
        isAuth: false
      };
    }

    default: {
      return state;
    }
  }
};

export default user;