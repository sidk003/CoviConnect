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

    console.log("email pass: ", entry);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/addData",
        entry,
        config
      );
      // console.log("Response: ", res.data.data);
      dispatch({
        type: "ADD_ENTRY",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "ENTRY_ERROR",
        payload: err.response,
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
