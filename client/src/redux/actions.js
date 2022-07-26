import Axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_GET_USER_DETAILS_REQUEST,
  USER_GET_USER_DETAILS_SUCCESS,
  USER_GET_USER_DETAILS_FAIL,
} from "./constants";

export const register = (data) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: data });
  try {
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (data) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: data });
  try {
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("users", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("users");
  // localStorage.removeItem("cart");
  // localStorage.removeItem("shippingAddress");
  dispatch({ type: USER_SIGNOUT });
  document.location.href = "/signin";
};

export const getUsers = (datas) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_GET_USER_DETAILS_REQUEST, payload: datas });
    dispatch({ type: USER_GET_USER_DETAILS_SUCCESS, payload: datas });
  } catch (error) {
    dispatch({
      type: USER_GET_USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
