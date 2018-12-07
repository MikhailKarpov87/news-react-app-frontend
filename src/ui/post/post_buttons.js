import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { deletePost } from "../../actions";

class PostButtons extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  render() {
    const { id, deletePost } = this.props;

    return (
      <div className="buttons">
        <Link to={`/news/${id}/edit`}>
          <i className="far fa-edit edit-icon" />
        </Link>

        <i
          className="far fa-trash-alt delete-icon"
          onClick={() => window.confirm("Вы уверены?") && deletePost(id)}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { deletePost }
)(PostButtons);
