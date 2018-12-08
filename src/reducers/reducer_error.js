import * as t from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case t.GET_NEWS_FAILED:
    case t.GET_POST_FAILED:
    case t.ADD_POST_FAILED:
    case t.EDIT_POST_FAILED:
    case t.DELETE_POST_FAILED:
    case t.LOGIN_FAILED:
    case t.LOGOUT_FAILED:
      //  Для некоторых ошибок текст так и не придумал, поэтому если приходит экшен с пустым payload.error,
      //  будем действовать как гугл - в любой непонятной ситуации выводить Опаньки:)
      return action.payload.error || "Опаньки.. Что-то пошло не так :(";

    case t.GET_NEWS_SUCCESS:
    case t.GET_POST_SUCCESS:
    case t.ADD_POST_SUCCESS:
    case t.EDIT_POST_SUCCESS:
    case t.DELETE_POST_SUCCESS:
    case t.LOGIN_SUCCESS:
    case t.LOGOUT_SUCCESS:
    case "@@redux-form/START_SUBMIT":
    case "@@redux-form/CHANGE":
      //  Нужно для обнуления ошибки при изменении данных в форме redux-form
      return false;

    default:
      return state;
  }
}
