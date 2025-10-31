import React from "react";
import "./App.scss";
import { Analytics } from "@vercel/analytics/react"
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <Main />
      <Analytics />
    </div>
  );
}

export default App;
