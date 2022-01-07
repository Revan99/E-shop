import {
  CREATE_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
} from "../constants/categoryConstants/categoryConstants";

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return { ...state, [action.payload.name]: action.payload };
    case EDIT_CATEGORY:
      const stateCopy = { ...state };
      delete stateCopy[action.payload.name];
      return { stateCopy };
    case DELETE_CATEGORY:
      return { ...state, [action.payload.name]: action.payload };
    default:
      return state;
  }
};
