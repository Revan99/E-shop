import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./component/header/Header";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Header />
        <Switch>
          <h1 style={{ color: "white" }}>hello from react</h1>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
