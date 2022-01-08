import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";
import HomePage from "./pages/home/HomePage";
import Stores from "./pages/stores/Stores";
import SingleStore from "./pages/singleStore/SingleStore";
import Products from "./pages/products/Products";
import StoreProducts from "./pages/storeProducts/StoreProducts";
import StoresTable from "./pages/storeTable/StoreTable";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="box-border flex flex-col ">
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" Component={HomePage} />{" "}
          <ProtectedRoute path="/stores" exact Component={Stores} />
          <ProtectedRoute path="/products" exact Component={Products} />
          <ProtectedRoute path="/stores/:name" exact Component={SingleStore} />
          <ProtectedRoute
            path="/stores/:name/:category"
            Component={StoreProducts}
          />
          <ProtectedRoute path="/stores-table" Component={StoresTable} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
