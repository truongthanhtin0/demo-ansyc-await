import axios from "axios";
import {
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_SUCCESS,
  GET_LIST_ACCOUNT_FAIL,
  GET_LIST_ACCOUNT_SUCCESS,
} from "./../constant";

const url = "http://localhost:3002";

export const createAccount = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/users`, { ...payload });

    dispatch({
      type: CREATE_ACCOUNT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_ACCOUNT_FAIL,
      payload: error.message,
    });
  }
};

export const getListAccount = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/users`);
    console.log("Log : response", response);

    dispatch({
      type: GET_LIST_ACCOUNT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_ACCOUNT_FAIL,
      payload: error.message,
    });
  }
};
