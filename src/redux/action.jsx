import axios from "axios";
import { ADD_ITEM, FAIL_REQUEST, GET_SHOPPING_LIST, MAKE_REQUEST } from "./actionType";
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
        .post("http://localhost:3030/items",data)
        .then((res) => {
          dispatch(addItem());
          toast.success("New item added")
        })
        .catch((error) => {
          dispatch(failRequest(error.message));
        });
    };
  };
