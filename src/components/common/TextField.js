import classnames from "classnames";
import React from "react";

export default function TextField({ ...rest }) {
  const cls = classnames("signup-input");
  return (
    <div className="form-group signup-form-group">
      <input autoComplete="off" className={cls} {...rest} />
    </div>
  );
}
