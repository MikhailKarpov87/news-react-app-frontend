import React from "react";
import PropTypes from "prop-types";

const PostInfo = props => {
  const { author, date } = props;
  return (
    <div className="post-info">
      <div className="author-info">
        <i className="fas fa-user-circle" />
        {author}
      </div>
      <div className="date-info">{date}</div>
    </div>
  );
};

PostInfo.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default PostInfo;
