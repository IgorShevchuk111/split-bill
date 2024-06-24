import React from "react";

function Button({ onClick, children, type }) {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default Button;
