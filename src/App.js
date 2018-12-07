import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { jwt } from "./middleware/jwt";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { readFromLocalStorage } from "./helpers/auth_helpers";
import Header from "./ui/header";
import Footer from "./ui/footer";
import PostsList from "./routes/posts_list";
import PostFull from "./routes/post_full";
import EditPost from "./routes/edit_post";
import AddPost from "./routes/add_post";
import Info from "./ui/info";

const initialState = {
  user: {
    userName: null,
    userId: null,
    token: null,
    googleToken: null,
    isAuth: false
  },
  news: [],
  error: null,
  isLoading: false,
  isDeleted: null
};

//  Redux DevTools для dev mode
//  https://github.com/zalmoxisus/redux-devtools-extension
let store;
if (
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
) {
  const myStore = composeWithDevTools(applyMiddleware(jwt, thunk))(createStore);
  store = myStore(reducers, initialState);
} else {
  store = createStore(reducers, initialState, applyMiddleware(thunk));
}

//  Checking local storage for JWT token
//  Dispatch AUTH_SUCCESS if found
const userData = readFromLocalStorage();
userData.token &&
  store.dispatch({
    type: "LOGIN_SUCCESS",
    payload: userData
  });

const App = () => {
  return (
    <div className="main-container">
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Header />
            <Switch>
              <Route exact path="/news/add" component={AddPost} />
              <Route exact path="/news/:id/edit" component={EditPost} />
              <Route exact path="/news/:id" component={PostFull} />
              <Route exact path="/news" component={PostsList} />
              <Route path="*" component={Info} />
            </Switch>
            <Footer />
          </>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
