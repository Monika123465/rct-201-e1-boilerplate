import React from "react";
import { updateJsxSelfClosingElement } from "typescript";
import useClock from "../hooks/useClock";

type Props = {

  //  TODO
};

const Clock = (props: Props) => {

  const {hours, minutes, seconds} = useClock()
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        24 Hour Live Custom Component Clock
      </h4>
      <span data-testid="clock-hours">
        {hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {seconds}
        </span>
    </div>
  );
};

export default Clock;
