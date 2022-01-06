import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./component/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <h1> hello from react</h1>
      </Switch>
    </Router>
  );
}

export default App;
