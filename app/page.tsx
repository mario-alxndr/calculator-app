'use client'

// Node Modules
import { useState } from "react";
import cn from "classnames";

// Component
import Toggle from "@/components/Toggle";
import CalculatorButton from "@/components/CalculatorButton";

const CalculatorPage = () => {
  const [toggleTheme, setToggleTheme] = useState(1);
  const [showedScreen, setShowedScreen] = useState('0');

  const handleClickToggle = () => {
    setToggleTheme((toggleTheme%3) + 1);
  };

  return (
    <main className={cn("min-h-screen", `bg-main-${toggleTheme}`)}>
      <div className="block max-w-xl mx-auto py-20 px-6">
        {/* Header */}
        <div className="flex justify-between space-x-0 h-full w-full items-center">
          <h1 className={cn("text-2xl font-bold", `font-color-${toggleTheme}`)}>calc</h1>
          <div className="flex">
            <p className={cn("text-sm font-bold mr-8 pb-1 self-end", `font-color-${toggleTheme}`)}>THEME</p>
            <Toggle currentTogglePosition={toggleTheme} onClickToggle={handleClickToggle} toggleAmount={3} />
          </div>
        </div>
        {/* Calculator Screen */}
        <div className={cn("h-32 w-full mt-6 p-8 rounded-lg", `bg-content-var-a-${toggleTheme}`)}>
          <p className={cn("font-bold text-6xl text-right", `font-color-${toggleTheme}`)}>{showedScreen}</p>
        </div>
        {/* Calculator Buttons */}
        <div className={cn("w-full grid grid-cols-4 gap-6 mt-6 p-8 rounded-lg", `bg-content-var-a-${toggleTheme}`)}>
          <CalculatorButton currentTheme={toggleTheme} label={'7'} value={'7'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'8'} value={'8'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'9'} value={'9'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'DEL'} value={'DELETE'} variant={'reset'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'4'} value={'4'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'5'} value={'5'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'6'} value={'6'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'+'} value={'ADD'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'1'} value={'1'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'2'} value={'2'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'3'} value={'3'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'-'} value={'SUBSTRACT'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'.'} value={'.'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'0'} value={'0'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'/'} value={'DIVIDE'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'x'} value={'MULTIPLY'}/>
          <CalculatorButton currentTheme={toggleTheme} isHalfRow label={'RESET'} value={'RESET'} variant={'reset'}/>
          <CalculatorButton currentTheme={toggleTheme} isHalfRow label={'='} value={'RESULT'} variant={'equal'}/>
        </div>
      </div>
    </main>
  )
}

export default CalculatorPage;
