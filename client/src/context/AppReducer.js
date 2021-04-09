// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return {
        ...state,
        entries: [action.payload],
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
