import React from "react";

//  Функции для валидации
export const required = value => (value ? undefined : "Поле не может быть пустым");

const minLength = min => value => (value.length >= min ? undefined : `Не менее ${min} символов`);

export const minLength6 = minLength(6);

//  Функции для рендера полей формы с помощью redux-form
export const renderTitleField = field => {
  const {
    input,
    label,
    type,
    meta: { touched, error }
  } = field;

  return (
    <>
      <input {...input} placeholder={label} type={type} className="input-title" />
      {touched && error && <div className="error-message">{error}</div>}
    </>
  );
};

export const renderContentField = field => {
  const {
    input,
    label,
    meta: { touched, error }
  } = field;

  return (
    <>
      <textarea {...input} placeholder={label} className="input-content" rows="10" />
      {touched && error && <div className="error-message">{error}</div>}
    </>
  );
};
