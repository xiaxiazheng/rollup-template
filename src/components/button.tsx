import React from "react";
import "./button.less";

const Button: React.FC = (props) => {
  return <button className="btn" {...props}>按钮</button>;
};

export default Button;
