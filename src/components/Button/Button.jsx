import React from "react";
import "./Button.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Button({ text, className }) {
  return (
    <>
      <button className={className}>
        {text}
        <MdOutlineArrowRightAlt className="iconArrow" />
      </button>
    </>
  );
}

export default Button;
