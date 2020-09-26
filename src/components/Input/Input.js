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
        <h1 className="text-white mx-auto pb-6 font-bold text-xl">
          To Do List
        </h1>
        <input
          type="text"
          className={`${inputField} mx-auto md:w-1/2 px-4 py-2`}
          value={input}
          onChange={(e) => {
            e.stopPropagation();
            if (e.target.value !== "") {
              setInput(e.target.value.trim());
            }
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
