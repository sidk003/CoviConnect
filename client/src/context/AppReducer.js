// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        loading: false,
        about: action.payload,
      };

    case "ADD_ENTRY":
      return {
        ...state,
        token: [action.payload],
      };

    case "ENTRY_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
