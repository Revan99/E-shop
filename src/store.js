import { createStore, combineReducers } from "redux";

import { storeReducer } from "./reducers/storeReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { productReducer } from "./reducers/productReducer";

import data from "./data.json";

const initialState = {
  stores: data.stores,
  products: data.items,
};

const rootReducer = combineReducers({
  stores: storeReducer,
  categories: categoryReducer,
  products: productReducer,
});

const store = createStore(rootReducer, initialState);
export default store;
