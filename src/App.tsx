import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes />;
      </Switch>
    </BrowserRouter>
  );
}

export default App;
