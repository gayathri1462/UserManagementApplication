import React from "react";
import { ButtonProps } from "../types/types";

const Button = ({ id, label, onClick, className }: ButtonProps) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
/*export default function Button(props) {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}*/
