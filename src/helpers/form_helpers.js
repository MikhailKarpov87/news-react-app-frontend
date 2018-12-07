import React from "react";

export const required = value => (value ? undefined : "Поле не может быть пустым");

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
      <textarea {...input} placeholder={label} className="input-content" rows="15" />
      {touched && error && <div className="error-message">{error}</div>}
    </>
  );
};
