import {
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_SUCCESS,
  GET_LIST_ACCOUNT_FAIL,
  GET_LIST_ACCOUNT_SUCCESS,
  GET_LIST_POST_SUCCESS,
  GET_LIST_POST_FAIL,
  GET_POST_DETAIL_SUCCESS,
  GET_POST_DETAIL_FAIL,
} from "../constant";

const initialState = {
  dataCreate: {},
  accountList: [],
  postList: [],
  postDetail: {},
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        dataCreate: { ...action.payload },
      };
    }
    case CREATE_ACCOUNT_FAIL: {
      return state;
    }
    case GET_LIST_ACCOUNT_SUCCESS: {
      return {
        ...state,
        accountList: [...action.payload],
      };
    }
    case GET_LIST_ACCOUNT_FAIL: {
      return state;
    }
    case GET_LIST_POST_SUCCESS: {
      return {
        ...state,
        postList: [...action.payload],
      };
    }
    case GET_LIST_POST_FAIL: {
      return state;
    }
    case GET_POST_DETAIL_SUCCESS: {
      return {
        ...state,
        postDetail: { ...action.payload },
      };
    }
    case GET_POST_DETAIL_FAIL: {
      return state;
    }
    default:
      return state;
  }
}
