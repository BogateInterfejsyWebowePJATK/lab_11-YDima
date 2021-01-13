import './App.css';
import React from "react"
import List from "./Components/2/list";

let number = 10;
function App() {
  return (
      <>
        <List number={number}/>
      </>
  );
}

export default App;