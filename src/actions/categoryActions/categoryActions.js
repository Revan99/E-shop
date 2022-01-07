import {
  CREATE_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
} from "../../constants/categoryConstants/categoryConstants";

export const createCategory = () => {
  return {
    type: CREATE_CATEGORY,
  };
};

export const deleteCategory = () => {
  return {
    type: DELETE_CATEGORY,
  };
};

export const editCategory = () => {
  return {
    type: EDIT_CATEGORY,
  };
};
