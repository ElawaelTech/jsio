import { useState } from "react";
export default function TextInput(props) {
  const [inputValue, setInputValue] = useState("");
  function handlerInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <label for={props.name} className="col-form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        className="form-control"
        autoComplete="off"
        value={inputValue}
        onChange={handlerInputChange}
      />
    </>
  );
}
