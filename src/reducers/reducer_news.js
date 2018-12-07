import * as t from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case t.GET_NEWS_SUCCESS:
      return action.payload.feeds;

    case t.GET_POST_SUCCESS:
      return [action.payload.feed];

    default:
      return state;
  }
}
