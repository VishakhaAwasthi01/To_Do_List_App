import React, { Fragment, useState } from "react";
import styles from "./Input.module.css";

const Input = ({ addTask }) => {
  const { inputBlock, inputField, button } = styles;
  const [input, setInput] = useState();
  const submit = () => {
    if (input.length) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <Fragment>
      <div className={`${inputBlock} `}>
        <input
          type="text"
          className={`${inputField} mx-auto md:w-1/2 px-4 py-2`}
          value={input}
          onChange={(e) => {
            e.stopPropagation();
            setInput(e.target.value);
          }}
        />
        <button
          className={`${button} md:my-0 my-4 mx-6`}
          onClick={() => {
            if (input) {
              submit();
            }
          }}
        >
          Add Task
        </button>
      </div>
    </Fragment>
  );
};
export default Input;
