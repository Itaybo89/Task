import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ContentArea from "./components/ContentArea/ContentArea";

function App() {
  return (
    <Router>
      <div className="App">
        <ContentArea />
      </div>
    </Router>
  );
}

export default App;
