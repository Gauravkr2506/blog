import React from "react";
import logo from "./../logo.svg";
import "./App.css";
import Add from "./../Components/Common/add";
import Data from "./../Data/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ backgroundColor: "#ff6600", margin: 10 }}>
          <h1 style={{ marginLeft: 10, color: "#472e00" }}>Hindi Vyang</h1>
        </div>
        <div style={{ margin: 10 }}>
          <div
            style={{
              width: "68%",
              float: "left",
              color: "#33331f",
              display: "block",
              paddingRight: 10,
              lineHeight: 1.9,
              fontWeight: 10,
            }}
          >
            {Data[0].content}
          </div>
          <div
            style={{
              width: "20%",
              height: "100%",
              float: "left",
              // backgroundColor: "#b2b299",
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
