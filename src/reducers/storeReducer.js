import {
  CREATE_STORE,
  DELETE_STORE,
  EDIT_STORE,
} from "../constants/storeConstants/storeConstants";

export const storeReducer = (state, action) => {
  switch (action.type) {
    case CREATE_STORE:
      return { ...state, [action.payload.name]: action.payload };
    case DELETE_STORE:
      const stateCopy = { ...state };
      delete stateCopy[action.payload.name];
      return { stateCopy };
    case EDIT_STORE:
      return { ...state, [action.payload.name]: action.payload };
    default:
      return state;
  }
};
