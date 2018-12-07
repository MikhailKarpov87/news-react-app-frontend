import { combineReducers } from "redux";

import user from "./reducer_user";
import news from "./reducer_news";
import error from "./reducer_error";
import isLoading from "./reducer_loading";
import isDeleted from "./reducer_deleted";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  user,
  news,
  error,
  isLoading,
  isDeleted,
  form: formReducer
});

export default rootReducer;
