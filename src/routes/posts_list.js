import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getNews } from "../actions";
import Post from "../ui/post/post_short";
import Spinner from "../ui/spinner";
import Info from "../ui/info";

class PostsList extends Component {
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
    errorMessage: PropTypes.string,
    getNews: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { news, user, isLoading } = this.props;

    return isLoading ? (
      <Spinner />
    ) : !news.length ? (
      <Info message="Новостей не найдено" />
    ) : (
      <div className="content-container">
        {news.map(post => (
          <Post
            id={post._id}
            key={post._id}
            title={post.title}
            content={post.content}
            author={post.creator.displayName}
            userIsAuthor={user.userId === post.creator._id}
            touchDate={post.createDate}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    news: state.news,
    isLoading: state.isLoading,
    isDeleted: state.isDeleted
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(PostsList);
