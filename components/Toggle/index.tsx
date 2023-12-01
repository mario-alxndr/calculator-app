import React from "react";
import cn from 'classnames';

// Types
import type { FC } from 'react';

type TToggle = {
  currentTogglePosition: number;
  onClickToggle: () => void;
  toggleAmount: number;
};

const Toggle: FC<TToggle> = (props) => {
  const { currentTogglePosition, onClickToggle, toggleAmount } = props;
  const toggleAmountArray: number[] = Array.from({length: toggleAmount}, (_, index) => index + 1);
  const leftPosition = ['1.5', '8', '14'];
  const leftPropertyClassname = `left-${leftPosition[currentTogglePosition-1]}`;

  return (
    <div className={"block"}>
      <div>
        {toggleAmountArray.map((value) => {
            return (
            <span className={"text-white text-xs mr-4 ml-2"} key={`toggle-label-${value}`}>{value}</span>
            )
        })}
      </div>
      <div className={"w-20 h-7 bg-content-var-a-1 rounded-2xl relative cursor-pointer"} onClick={onClickToggle} >
        <div className={cn(`transition-left duration-200 ease-in-out absolute w-4 h-4 rounded-2xl bg-content-var-b-1 top-1.5`, leftPropertyClassname)} />
      </div>
    </div>
  )
}

export default Toggle;
