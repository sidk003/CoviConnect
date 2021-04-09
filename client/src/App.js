import React from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <LandingPage />
      </GlobalProvider>
    </>
  );
}

export default App;
