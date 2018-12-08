import axios from "axios";
import { API_URL } from "../config";
import jwt from "jsonwebtoken";
import { SubmissionError } from "redux-form";
import * as t from "../constants";
import {
  readFromLocalStorage,
  writeToLocalStorage,
  clearLocalStorage
} from "../helpers/auth_helpers";

//  Получаем JWT токен из localStorage и устанавливаем его
//  в качестве default хедера для Axios запросов
axios.defaults.headers.common["x-access-token"] = readFromLocalStorage().token || null;

function startLoading() {
  return { type: t.START_LOADING };
}

//  Sign In
export function signIn() {
  return dispatch => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    return GoogleAuth.signIn({ scope: "profile email" })
      .then(user => {
        const googleToken = user.getAuthResponse().id_token;
        const userName = user.getBasicProfile().getName();
        return axios
          .post(`${API_URL}/auth/google`, { token: googleToken })
          .then(response => {
            const token = response.data.token;
            //  Получаем id пользователя из JWT токена
            const userId = jwt.decode(token).id;
            dispatch(loginSuccess(token, googleToken, userName, userId));
          })
          .catch(err => dispatch(loginFailed(err)));
      })
      .catch(err => dispatch(loginFailed(err)));
  };
}

export function loginSuccess(token, googleToken, userName, userId) {
  writeToLocalStorage(token, googleToken, userName, userId);
  axios.defaults.headers.common["x-access-token"] = token;

  return {
    type: t.LOGIN_SUCCESS,
    payload: { token, googleToken, userName, userId }
  };
}

function loginFailed(err) {
  return { type: t.LOGIN_FAILED, payload: err };
}

//  Sign Out
export function signOut() {
  return dispatch => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    return GoogleAuth.signOut()
      .then(res => dispatch(signoutSuccess()))
      .catch(err => dispatch(signoutFailed(err)));
  };
}

function signoutSuccess() {
  clearLocalStorage();
  return { type: t.LOGOUT_SUCCESS };
}

function signoutFailed(err) {
  return { type: t.LOGOUT_FAILED, payload: err };
}

//  Get News List
export function getNews() {
  return dispatch => {
    dispatch(startLoading());
    return axios
      .get(`${API_URL}/feeds`)
      .then(response => dispatch(getNewsSuccess(response.data)))
      .catch(err => dispatch(getNewsFailed(err)));
  };
}

function getNewsSuccess(data) {
  return { type: t.GET_NEWS_SUCCESS, payload: data };
}

function getNewsFailed(err) {
  return { type: t.GET_NEWS_FAILED, payload: err };
}

//  Get Single Post
export function getPost(id) {
  return dispatch => {
    dispatch(startLoading());
    return axios
      .get(`${API_URL}/feeds/${id}`)
      .then(response => dispatch(getPostSuccess(response.data)))
      .catch(err => dispatch(getPostFailed(err.response.data)));
  };
}

function getPostSuccess(data) {
  return { type: t.GET_POST_SUCCESS, payload: data };
}

function getPostFailed(err) {
  return { type: t.GET_POST_FAILED, payload: err };
}

//  Edit Post
export function editPost(id, data) {
  return dispatch => {
    dispatch(startLoading());
    return axios
      .put(`${API_URL}/feeds/${id}`, { title: data.title, content: data.content })
      .then(response => dispatch(editPostSuccess(response.data)))
      .catch(err => {
        dispatch(editPostFailed(err.response.data));
        throw new SubmissionError({ message: err.response.data });
      });
  };
}

function editPostSuccess(data) {
  return { type: t.EDIT_POST_SUCCESS, payload: data };
}

function editPostFailed(err) {
  return { type: t.EDIT_POST_FAILED, payload: err };
}

//  Add Post
export function addPost(data) {
  return dispatch => {
    dispatch(startLoading());
    return axios
      .post(`${API_URL}/feeds`, { title: data.title, content: data.content })
      .then(response => dispatch(addPostSuccess(response.data)))
      .catch(err => {
        dispatch(addPostFailed(err.response.data));
        throw new SubmissionError({ message: err.response.data });
      });
  };
}

function addPostSuccess(data) {
  return { type: t.ADD_POST_SUCCESS, payload: data };
}

function addPostFailed(err) {
  return { type: t.ADD_POST_FAILED, payload: err };
}

//  Delete Post
export function deletePost(id) {
  return dispatch => {
    dispatch(startLoading());
    return axios
      .delete(`${API_URL}/feeds/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data));
        //  Если был удален пост, нужно получить новый список новостей
        dispatch(getNews());
      })
      .catch(err => dispatch(deletePostFailed(err)));
  };
}

function deletePostSuccess(data) {
  return { type: t.DELETE_POST_SUCCESS, payload: data };
}

function deletePostFailed(err) {
  return { type: t.DELETE_POST_FAILED, payload: err };
}
