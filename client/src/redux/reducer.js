import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_GET_USER_DETAILS_REQUEST,
  USER_GET_USER_DETAILS_SUCCESS,
  USER_GET_USER_DETAILS_FAIL,
} from "./constants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, error: false };
    case USER_REGISTER_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true, error: false };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const getUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_GET_USER_DETAILS_REQUEST:
      return { loading: true, error: false };
    case USER_GET_USER_DETAILS_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_GET_USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
