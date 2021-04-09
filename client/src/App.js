import React from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { NameAge } from "./components/NameAge";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <LandingPage />
        {/* <NameAge /> */}
      </GlobalProvider>
    </>
  );
}

export default App;
