'use client'

// Node Modules
import { useState } from "react";
import cn from "classnames";

// Component
import Toggle from "@/components/Toggle";
import CalculatorButton from "@/components/CalculatorButton";

// Lib
import { numberWithCommas } from "@/lib/helpers";

const CalculatorPage = () => {
  const [toggleTheme, setToggleTheme] = useState(1);

  const [operand1, setOperand1] = useState<string>('0');
  const [operator, setOperator] = useState<string | undefined>();
  const [operand2, setOperand2] = useState<string | undefined>();

  const handleClickToggle = () => {
    setToggleTheme((toggleTheme%3) + 1);
  };

  const operateCalculator = (
    operand1: string,
    operator: string,
    operand2: string
  ): string => {
    const sanitizeOperand1 = operand1.includes('.') ? parseFloat(operand1) : parseInt(operand1);
    const sanitizeOperand2 = operand2.includes('.') ? parseFloat(operand2) : parseInt(operand2);

    switch(operator) {
      case('ADD'):
        return (sanitizeOperand1 + sanitizeOperand2).toString();
      case('SUBSTRACT'): 
      return (sanitizeOperand1 - sanitizeOperand2).toString();
      case('MULTIPLY'):
      return (sanitizeOperand1 * sanitizeOperand2).toString();
      case('DIVIDE'): {
        if(operand2 === '0') {
          return 'Error';
        }
        return (sanitizeOperand1 / sanitizeOperand2).toString();
      }
      default: return ''
    };
  };

  const handleClickButton = (value: string) => {
    if(!!parseInt(value) || value === '0' || value === '.') {
      if(!operator) {
        const newOperand1 = operand1 === 'Error' ? value : 
          value === '.' && !operand1.includes('.') ? operand1 + value : operand1.includes('.') ? 
            parseFloat("" + operand1 + value).toString().slice(0,9) :
            parseInt("" + operand1 + value).toString().slice(0,9);

        return setOperand1(newOperand1);
      } else {
        const newOperand2 = !!operand2 && value !== '.' ? 
          value === '.' && !operand2.includes('.') ? operand2 + value :
            operand2.includes('.') ? 
              parseFloat("" + operand2 + value).toString().slice(0,9) :
              parseInt("" + operand2 + value).toString().slice(0,9) : 
          value;
        return setOperand2(newOperand2);
      }
    }

    if (
      value === 'SUBSTRACT' || 
      value === 'ADD' || 
      value === 'MULTIPLY' || 
      value === 'DIVIDE'
    ) {
      return setOperator(value);
    }

    if (value === 'DELETE') {
      if(!!operand1) {
        if(operand1.length > 1) {
          return setOperand1(operand1.slice(0, -1));
        } return setOperand1('0');
      }

      if(!!operand2) {
        if(operand2.length > 1) {
          return setOperand2(operand2.slice(0, -1));
        } return setOperand2('0');
      }
    }

    if (value === 'RESET') {
      setOperand1('0');
      setOperator(undefined);
      setOperand2(undefined);
    }

    if (value === 'RESULT') {
      if(!!operand1 && !!operator && !!operand2) {
        const result = operateCalculator(operand1, operator, operand2);

        setOperand1(result);
        setOperator(undefined);
        setOperand2(undefined);
      }
    }
  };

  console.log('operand1', operand1);

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
          <p className={cn("font-bold text-6xl text-right overflow-scroll", `font-color-${toggleTheme}`)}>
            { !operand2 ? 
              numberWithCommas(operand1) : 
              numberWithCommas(operand2)
            }
          </p>
        </div>
        {/* Calculator Buttons */}
        <div className={cn("w-full grid grid-cols-4 gap-6 mt-6 p-8 rounded-lg", `bg-content-var-a-${toggleTheme}`)}>
          <CalculatorButton currentTheme={toggleTheme} label={'7'} onClick={handleClickButton} value={'7'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'8'} onClick={handleClickButton} value={'8'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'9'} onClick={handleClickButton} value={'9'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'DEL'} onClick={handleClickButton} value={'DELETE'} variant={'reset'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'4'} onClick={handleClickButton} value={'4'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'5'} onClick={handleClickButton} value={'5'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'6'} onClick={handleClickButton} value={'6'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'+'} onClick={handleClickButton} value={'ADD'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'1'} onClick={handleClickButton} value={'1'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'2'} onClick={handleClickButton} value={'2'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'3'} onClick={handleClickButton} value={'3'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'-'} onClick={handleClickButton} value={'SUBSTRACT'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'.'} onClick={handleClickButton} value={'.'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'0'} onClick={handleClickButton} value={'0'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'/'} onClick={handleClickButton} value={'DIVIDE'}/>
          <CalculatorButton currentTheme={toggleTheme} label={'x'} onClick={handleClickButton} value={'MULTIPLY'}/>
          <CalculatorButton currentTheme={toggleTheme} isHalfRow label={'RESET'} onClick={handleClickButton} value={'RESET'} variant={'reset'}/>
          <CalculatorButton currentTheme={toggleTheme} isHalfRow label={'='} onClick={handleClickButton} value={'RESULT'} variant={'equal'}/>
        </div>
      </div>

      <footer className={"block bg-white w-full"}>
        <p className={"text-xs"}>
          Challenge by <a className={"text-blue-700"} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a className={"text-blue-700"} href="https://github.com/mario-alxndr">mario-alxndr</a>.
        </p>
      </footer>
    </main>
  )
}

export default CalculatorPage;
