const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
    case "SIGNUP":
    case "CHECKUSER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export { authReducer };
