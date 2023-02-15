import React from "react";
import Nav from "./components/Nav";

import "./App.css";
import Display from "./components/Display";

import DataState from "./Context/DataState";

function App() {
  return (
    <DataState>
      <Nav />
      <Display />
      
    </DataState>
  );
}

export default App;
