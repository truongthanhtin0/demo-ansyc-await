import axios from "axios";
import { toastError, toastSuccess } from "./../../util/toast";
import history from "./../../util/history";
import {
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_SUCCESS,
  GET_LIST_ACCOUNT_FAIL,
  GET_LIST_ACCOUNT_SUCCESS,
  GET_LIST_POST_FAIL,
  GET_LIST_POST_SUCCESS,
  GET_POST_DETAIL_FAIL,
  GET_POST_DETAIL_SUCCESS,
} from "./../constant";

const url = "http://localhost:3002";

export const createAccount = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/users`, { ...payload });

    dispatch({
      type: CREATE_ACCOUNT_SUCCESS,
      payload: response.data,
    });
    toastSuccess("Đăng ký thành công!");
    history.push("/login");
  } catch (error) {
    dispatch({
      type: CREATE_ACCOUNT_FAIL,
      payload: error.message,
    });
    toastError("Đăng ký thất bại!");
  }
};

export const getListAccount = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/users`);

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

export const getListPost = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=20"
    );

    dispatch({
      type: GET_LIST_POST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_POST_FAIL,
      payload: error.message,
    });
  }
};

export const getPostDetail = (payload) => async (dispatch) => {
  const { id } = payload;
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    dispatch({
      type: GET_POST_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POST_DETAIL_FAIL,
      payload: error.message,
    });
  }
};
