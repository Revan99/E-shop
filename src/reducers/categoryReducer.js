import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
} from "../constants/categoryConstants/categoryConstants";

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return { ...state, [action.payload.name]: action.payload };
    case DELETE_CATEGORY:
      const stateCopy = { ...state };
      delete stateCopy[action.payload.name];
      return { stateCopy };
    case EDIT_CATEGORY:
      return { ...state, [action.payload.name]: action.payload };
  }
};
