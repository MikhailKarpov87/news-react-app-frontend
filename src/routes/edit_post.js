import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getPost, editPost } from "../actions";
import { required, renderTitleField, renderContentField } from "../helpers/form_helpers";
import { getErrorText } from "../constants";
import Info from "../ui/info";
import Spinner from "../ui/spinner";

class EditPost extends Component {
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
    getPost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired
  };

  componentDidMount() {
    //  Если новости еще нет в state, делаем запрос к серверу
    const { match, getPost } = this.props;
    const { id } = match.params;

    if (!this.props.news.find(news => news._id === id)) {
      getPost(id);
    }
  }

  componentDidUpdate(prevProps) {
    //  инициализируем форму после получения данных о новости
    //  initialized, initialize() - из redux-form
    const { match, initialize, initialized, news } = prevProps;
    const post = news.find(post => post._id === match.params.id);
    !initialized && post && initialize(post);
  }

  render() {
    const {
      match: {
        params: { id }
      },
      news,
      user,
      error,
      errorMessage,
      isLoading,
      handleSubmit,
      submitting,
      editPost,
      history
    } = this.props;

    if (isLoading && !errorMessage) {
      return <Spinner />;
    }

    //  Показываем ошибку, если есть errorMessage или новость с указанным id не найдена
    if (errorMessage || !news.find(news => news._id === id)) {
      return <Info message={getErrorText(errorMessage) || "Новость не найдена"} />;
    }

    const post = news.find(post => post._id === id);

    if (!user.isAuth || user.userId !== post.creator._id) {
      return <Info message="У вас нет доступа к этой странице" />;
    }

    return (
      <form
        onSubmit={handleSubmit(event =>
          editPost(post._id, event).then(() => history.push(`/news/${id}`))
        )}
      >
        <div className="content-container">
          <div className="post-container">
            <div className="post-header">
              <div className="post-title">
                <Field
                  component={renderTitleField}
                  type="text"
                  name="title"
                  placeholder="Введите заголовок"
                  validate={required}
                  key="title"
                />
              </div>
            </div>

            <div className="post-body">
              <Field
                component={renderContentField}
                name="content"
                validate={required}
                key="content"
              />
            </div>
          </div>

          <div className="bottom-buttons">
            <button type="submit" className="edit-button" disabled={submitting || error}>
              Сохранить
            </button>
            <Link to={`/news/${post._id}`}>
              <button className="delete-button">Отменить</button>
            </Link>
          </div>
        </div>
      </form>
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

const ReduxEditForm = reduxForm({ form: "edit_form" })(EditPost);

export default connect(
  mapStateToProps,
  { getPost, editPost }
)(ReduxEditForm);
