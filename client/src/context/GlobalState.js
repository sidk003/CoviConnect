import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  entry: [],
  error: null,
  loading: true,
  token: "",
};

// Create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function userLogin(entry) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "https://aqueous-plains-64390.herokuapp.com/api/user/login",
        entry,
        config
      );
      dispatch({
        type: "ADD_ENTRY",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "ENTRY_ERROR",
        payload: err.response,
      });
    }
  }
  // base64 token
  async function addVaccineData(entry) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (entry !== undefined) console.log("entry: ", entry.base64file);

    try {
      const res = await axios.post(
        "https://aqueous-plains-64390.herokuapp.com/api/user/addVaccineData?token=" +
          state.token[0].token,
        entry,
        config
      );

      dispatch({
        type: "ADD_ENTRY",
        payload: res.data,
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
        userLogin,
        token: state.token,
        addVaccineData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
