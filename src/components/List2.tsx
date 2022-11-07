import React,{useState} from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = 
{
  label: string,
  initialValues: Array<number>
  // TODO
};
const List2 = (props: List2Props) => {
  const {list, appendEnd, appendStart, popEnd, popStart, clear, reset} = useNumberList(props.initialValues);
  const [inputVal, setInputVal] = useState<number>(0)

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{props.label}</h3>
      {list.map((el, index) => <li key={el + index+ Math.random()}>{el}</li>)}

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{/* Each element in a list */}</div>

      <input data-testid="list2-input" type="number" value={inputVal}  onChange={(e) => setInputVal(+e.target.value)}/>
      <button data-testid="list2-btn-append-end" onClick={() => appendEnd(inputVal)}>
        Append End
        {/* Button to append new number to the end of the list */}
      </button>
      <button data-testid="list2-btn-pop-start" onClick={() =>popStart()}>
        Pop Start
        {/* Button to  pop first element of the list */}
      </button>
      <button data-testid="list2-btn-clear" onClick={() => clear()}>
        Clear
        {/* Button to  clear the list */}
      </button>
      <button data-testid="list2-btn-reset" onClick={() => reset()}>
        Reset
        {/* Button to  reset the list to initialValue */}
      </button>
    </div>
  );
};

export default List2;
