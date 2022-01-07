import {
  EDIT_STORE,
  CREATE_STORE,
  DELETE_STORE,
} from "../../constants/storeConstants/storeConstants";

export const deleteStore = () => {
  return {
    type: DELETE_STORE,
  };
};
export const createStore = () => {
  return {
    type: CREATE_STORE,
  };
};
export const editStore = () => {
  return {
    type: EDIT_STORE,
  };
};
