import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";
import HomePage from "./pages/home/HomePage";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
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
