import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";

import "./Input.css";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date());

  const onInput = props.onInput;

  const changeValueHandler = (event) => {
    setEnteredValue(event.target.value);
    onInput(props.id, event.target.value);
  };
  const changeDate = (date) => {
    setEnteredDate(date);
    onInput(props.id, date);
    console.log(date);
  };

  let passedValue = props.value;

  let inputObject = {};
  if (props.type === "date") {
    inputObject = (
      <div className="input">
        <label>{props.title}</label>
        <DatePicker selected={enteredDate} onChange={changeDate} />
      </div>
    );
  } else {
    inputObject = (
      <div className="input">
        <label htmlFor={props.id}>{props.title}</label>
        <br></br>
        <input
          className={props.value ? "gray" : ""}
          readOnly={props.value ? true : false}
          onChange={changeValueHandler}
          value={props.value ? props.value : enteredValue}
          id={props.id}
        />
      </div>
    );
  }

  return inputObject;
};

export default Input;
