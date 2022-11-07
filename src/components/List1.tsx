import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  label: string,
  initialValues: Array<number>
};
const List1 = (props: List1Props) => {
  const {list, appendEnd, appendStart, popEnd, popStart, clear, reset} = useNumberList(props.initialValues);
  const [inputVal, setInputVal] = useState<number>(0)

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{/* Label */} {
        props.label
      }</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">{/* Each element in a list */}

        {list.map((el, index) => <li key={el + index+ Math.random()}>{el}</li>)}
      </div>

      
      <input data-testid="list1-input" type="number" value={inputVal} onChange={(e) => setInputVal(+e.target.value)} />
      <button data-testid="list1-btn-append-start"  onClick={() => appendStart(inputVal) }>
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={() => popEnd()}>
        {/* po last element btn */}
        Pop End
      </button>
      <button data-testid="list1-btn-clear" onClick={clear}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={reset}>
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
