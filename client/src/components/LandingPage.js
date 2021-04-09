import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const LandingPage = () => {
  const [text, setText] = useState("");
  const [age, setAge] = useState(0);

  const { addEntry } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Math.floor(Math.random() * 100000000),
      text,
      age,
    };
    addEntry(newEntry);
  };

  return (
    <>
      <h3>Input Form</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name: </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="amount">Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <br />
        <button className="btn">Submit</button>
      </form>
    </>
  );
};
