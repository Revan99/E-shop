import {
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../../constants/productConstants/productConstants";

export const createProduct = () => {
  return {
    type: CREATE_PRODUCT,
  };
};

export const deleteProduct = () => {
  return {
    type: DELETE_PRODUCT,
  };
};

export const editProduct = () => {
  return {
    type: EDIT_PRODUCT,
  };
};
