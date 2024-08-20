import axios from "axios";
import {
  ADD_ITEM,
  FAIL_REQUEST,
  GET_SHOPPING_LIST,
  MAKE_REQUEST,
  DELETE_ITEM,
  GET_ITEM_OBJECT,
  UPDATE_ITEM,
} from "./actionType";
import { toast } from "react-toastify";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = (error) => {
  return {
    type: FAIL_REQUEST,
    payload: error,
  };
};

export const getShoppingList = (data) => {
  return {
    type: GET_SHOPPING_LIST,
    payload: data,
  };
};

export const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

export const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export const updateItem = () => {
  return {
    type: UPDATE_ITEM,
  };
};

export const getItemObj = () => {
  return {
    type: GET_ITEM_OBJECT,
    payload: data,
  };
};

export const fetchShoppingList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get("http://localhost:3030/items")
      .then((res) => {
        const shoppingList = res.data;
        dispatch(getShoppingList(shoppingList));
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};

export const addShoppingItem = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .post("http://localhost:3030/items", data)
      .then((res) => {
        dispatch(addItem());
        toast.success("New item added");
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};

export const removeShoppingItem = (id) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .delete("http://localhost:3030/items/" + id)
      .then((res) => {
        dispatch(deleteItem());
        toast.success("Item deleted");
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};

export const updateShoppingItem = (data, id) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .put("http://localhost:3030/items", id, data)
      .then((res) => {
        dispatch(updateItem());
        toast.success("Item updated");
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};
