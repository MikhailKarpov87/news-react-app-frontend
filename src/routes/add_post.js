import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { addPost } from "../actions";
import { required, renderTitleField, renderContentField } from "../helpers/form_helpers";
import { getErrorText } from "../constants";
import Spinner from "../ui/spinner";
import Info from "../ui/info";

class AddPost extends Component {
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
    errorMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    addPost: PropTypes.func.isRequired
  };

  render() {
    const {
      user,
      isLoading,
      errorMessage,
      handleSubmit,
      submitting,
      pristine,
      addPost,
      history
    } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    if (!user.isAuth) {
      return <Info message="У вас нет доступа к этой странице" />;
    }

    return (
      <div className="content-container">
        <h2>Добавить новость</h2>

        <form
          onSubmit={handleSubmit(event =>
            addPost(event).then(res => res.type === "ADD_POST_SUCCESS" && history.push("/news"))
          )}
        >
          <div className="post-container">
            <Field
              component={renderTitleField}
              type="text"
              name="title"
              label="Введите заголовок"
              validate={required}
              key="title"
            />

            <Field
              component={renderContentField}
              name="content"
              label="Введите текст новости"
              validate={required}
              key="content"
            />

            {errorMessage && <div className="error-message">{getErrorText(errorMessage)}</div>}
          </div>

          <div className="bottom-buttons">
            <button
              type="submit"
              className="edit-button"
              disabled={submitting || pristine || errorMessage}
            >
              Сохранить
            </button>
            <Link to={`/news`}>
              <button className="delete-button">Отменить</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    news: state.news,
    errorMessage: state.error,
    isLoading: state.isLoading
  };
};

const ReduxEditForm = reduxForm({ form: "add_form" })(AddPost);

export default connect(
  mapStateToProps,
  { addPost }
)(ReduxEditForm);
