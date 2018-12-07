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

    default:
      return state;
  }
}
