import {
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/productConstants/productConstants";

export const productReducer = (state, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return { ...state, [action.payload.name]: action.payload };
    case EDIT_PRODUCT:
      const stateCopy = { ...state };
      delete stateCopy[action.payload.name];
      return { stateCopy };
    case DELETE_PRODUCT:
      return { ...state, [action.payload.name]: action.payload };
  }
};
