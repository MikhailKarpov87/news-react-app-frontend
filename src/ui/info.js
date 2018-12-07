import React from "react";
import PropTypes from "prop-types";

const Info = props => {
  const message = props.message || "Страница не найдена";
  return (
    <div className="message-container">
      <h3>{message}</h3>
    </div>
  );
};

Info.propTypes = {
  message: PropTypes.string
};

export default Info;
