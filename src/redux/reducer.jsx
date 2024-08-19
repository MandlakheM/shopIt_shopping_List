import { ADD_ITEM, FAIL_REQUEST, GET_SHOPPING_LIST, MAKE_REQUEST } from "./actionType";

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
    default:
      return state;
  }
};
