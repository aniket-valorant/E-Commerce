import axios from "axios";
import { API_BASED_URL } from "../../Config/api";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const token = localStorage.getItem("jwt");

const registerRequest = () => (
  {
    type: REGISTER_REQUEST
  }
);
const registerSuccess = (user) => (
    {
    type: REGISTER_SUCCESS,
    payload: user,
  }
)
;
const registerFailure = (error) => (
  {
    type: REGISTER_FAILURE
  }
);

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post(`${API_BASED_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

const loginRequest = () => (
  {
    type: LOGIN_REQUEST
  }
);
const loginSuccess = (user) => (
  {
    type: LOGIN_SUCCESS,
    payload: user,
  }
);
const loginFailure = (error) => (
  {
    type: LOGIN_FAILURE
  }
);

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post(`${API_BASED_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(loginSuccess(user));

  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const getUserRequest = () => (
  {
    type: GET_USER_REQUEST
  }
);
const getUserSuccess = (user) => (
  {
    type: GET_USER_SUCCESS,
    payload: user,
  }
);
const getUserFailure = (error) => (
  {
    type: GET_USER_FAILURE
  }
);

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const response = await axios.get(`${API_BASED_URL}/api/users/profile`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    const user = response.data;
    // console.log('user: ', user)
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem('jwt')
  localStorage.clear()
  dispatch({type: LOGOUT})
}