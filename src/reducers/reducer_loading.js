import * as t from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case t.START_LOADING:
      return true;

    default:
      return false;
  }
}
