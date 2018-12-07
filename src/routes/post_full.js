import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getPost, deletePost } from "../actions";
import Info from "../ui/info";
import PostButtons from "../ui/post/post_buttons";
import Spinner from "../ui/spinner";
import PostInfo from "../ui/post/post_info";

class PostFull extends Component {
  static propTypes = {
    user: PropTypes.shape({
      userName: PropTypes.string,
      userId: PropTypes.string,
      token: PropTypes.string,
      googleToken: PropTypes.string,
      isAuth: PropTypes.bool.isRequired
    }),
    news: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isDeleted: PropTypes.string,
    errorMessage: PropTypes.string,
    getPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { match, getPost } = this.props;
    const { id } = match.params;
    getPost(id);
  }

  shouldComponentUpdate(props) {
    props.isDeleted === props.match.params.id && props.history.push("/news");
    return true;
  }

  render() {
    const { match, news, error, isLoading, user, deletePost, history } = this.props;
    const { id } = match.params;

    if (isLoading && !error) {
      return <Spinner />;
    }

    if (!news.find(news => news._id === id) || error) {
      const message = error === "Bad news item ID" ? "Новость не найдена" : "Ошибка загрузки";
      return <Info message={message} />;
    } else {
      const post = news.find(news => news._id === id);
      const { _id, title, content, createDate, creator } = post;
      const date = new Date(createDate).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });

      return (
        <div className="content-container">
          <div className="post-container">
            <div className="post-header">
              <div className="post-title">
                <h3>{title}</h3>
              </div>
              {user.userId === post.creator._id && <PostButtons id={_id} history={history} />}
            </div>

            <PostInfo author={creator.displayName} date={date} />

            <div className="post-body">
              <p>{content}</p>
            </div>
          </div>

          {user.userId === post.creator._id && (
            <div className="bottom-buttons">
              <Link to={`/news/${_id}/edit`}>
                <button className="edit-button">Редактировать</button>
              </Link>
              <button
                onClick={() => window.confirm("Вы уверены?") && deletePost(id, history)}
                className="delete-button"
              >
                Удалить
              </button>
            </div>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user,
  news: state.news,
  error: state.error,
  isLoading: state.isLoading,
  isDeleted: state.isDeleted
});

export default connect(
  mapStateToProps,
  { getPost, deletePost }
)(PostFull);
