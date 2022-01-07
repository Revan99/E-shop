import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./component/header/Header";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="box-border flex flex-col ">
      <Router>
        <Switch>
          <ProtectedRoute path="/" Component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
