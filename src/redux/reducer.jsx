import {
  ADD_ITEM,
  FAIL_REQUEST,
  GET_SHOPPING_LIST,
  MAKE_REQUEST,
  DELETE_ITEM,
  UPDATE_ITEM,
  GET_ITEM_OBJECT,
} from "./actionType";

const initialstate = {
  loading: true,
  shoppinglist: [],
  shoppingobj: {},
  errormessage: "",
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errormessage: action.payload,
      };
    case GET_SHOPPING_LIST:
      return {
        loading: false,
        errormessage: "",
        shoppinglist: action.payload,
        shoppingobj: {},
      };
    case ADD_ITEM:
      return {
        ...state,
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        loading: false,
      };
    case GET_ITEM_OBJECT:
      return {
        ...state,
        loading: false,
        shoppingobj: action.payload,
      };
    default:
      return state;
  }
};
