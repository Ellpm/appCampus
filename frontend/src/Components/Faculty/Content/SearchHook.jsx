import React, { useState } from "react";

export default (props) => {
  const [value, setValue] = useState("");
  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={() => props.onSearch(value)}>Поиск</button>
        </div>
        <input type="text" onChange={valueChangeHandler} value={value} />
      </div>
    </>
  );
};
