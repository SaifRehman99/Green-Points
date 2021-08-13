import React from "react";
import Header from "./Screens/Header";
import Sidebar from "./Screens/Sidebar";



function App() {
  return (
    <div>
      <Header/>

      <div className="d-flex">
      <div className="sidebar"><Sidebar/></div>
      <div className="container">Hello</div>
      </div>
    </div>
  );
}

export default App;