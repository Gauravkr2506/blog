import React from "react";
import logo from "./../logo.svg";
import "./App.css";
import Add from "./../Components/Common/add";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ backgroundColor: "#ff6600", margin: 10 }}>
          <h1 style={{ marginLeft: 10, color: "#472e00" }}>Blog</h1>
        </div>
        <div style={{ margin: 10 }}>
          <div
            style={{ width: "80%", float: "left", backgroundColor: "#851f00" }}
          >
            dddddd
          </div>
          <div
            style={{
              width: "20%",
              height: "100%",
              float: "left",
              backgroundColor: "#ff8c00",
            }}
          >
            <Add />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
