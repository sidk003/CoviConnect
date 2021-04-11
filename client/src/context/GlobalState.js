import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  aboutVaccine: [],
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
  // Get request vaccine
  async function getAboutVaccine() {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/user/getVaccineData"
      );
      console.log("vaccine from global: ", res.data.data);
      dispatch({
        type: "GET_DATA",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "DATA_ERROR",
        payload: err.response,
      });
    }
  }

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
    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/addVaccineData?token=" +
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

  // For file
  async function addFile(entry) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // console.log("File: ", entry);
    try {
      const res = await axios.post(
        "http://localhost:4000/upload",
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
        addFile,
        aboutVaccine: state.aboutVaccine,
        getAboutVaccine,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
