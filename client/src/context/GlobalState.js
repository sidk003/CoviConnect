import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  entry: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function addEntry(entry) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("entry: ", entry);

    try {
      const res = await axios.post("api/v1/entry", entry, config);

      dispatch({
        type: "ADD_ENTRY",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "ENTRY_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        error: state.error,
        loading: state.loading,
        entry: state.entry,
        addEntry,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
