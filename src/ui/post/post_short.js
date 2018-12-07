import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import PostButtons from "./post_buttons";
import PostInfo from "./post_info";

const Post = props => {
  const { id, title, content, author, touchDate, userIsAuthor } = props;
  const shortContent = content.length > 200 ? content.substr(0, 200) + "..." : content;
  const date = new Date(touchDate).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-title">
          <Link to={`/news/${id}`}>
            <h3>{title}</h3>
          </Link>
        </div>
        {userIsAuthor && <PostButtons id={id} />}
      </div>

      <PostInfo author={author} date={date} />
      <div className="post-body">
        <p>{shortContent}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  touchDate: PropTypes.string.isRequired,
  userIsAuthor: PropTypes.bool.isRequired
};

export default Post;
