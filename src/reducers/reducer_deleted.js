import * as t from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case t.DELETE_POST_SUCCESS:
      return action.payload._id;

    default:
      return null;
  }
}
