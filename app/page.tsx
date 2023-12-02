'use client'

// Node Modules
import { useState } from "react";
import cn from "classnames";

// Component
import Toggle from "@/components/Toggle";

const CalculatorPage = () => {
  const [toggleTheme, setToggleTheme] = useState(1);

  const handleClickToggle = () => {
    setToggleTheme((toggleTheme%3) + 1);
  };

  return (
    <main className={cn("min-h-screen", `bg-main-${toggleTheme}`)}>
      <div className="block max-w-xl mx-auto py-20 px-6">
        <div className="flex justify-between space-x-0 h-full w-full items-center">
          <h1 className={cn("text-2xl font-bold", `font-color-${toggleTheme}`)}>calc</h1>
          <div className="flex">
            <p className={cn("text-sm font-bold mr-8 pb-1 self-end", `font-color-${toggleTheme}`)}>THEME</p>
            <Toggle currentTogglePosition={toggleTheme} onClickToggle={handleClickToggle} toggleAmount={3} />
          </div>
        </div>
        <div className={cn("h-32 w-full mt-6 rounded-lg", `bg-content-var-a-${toggleTheme}`)}>

        </div>
      </div>
    </main>
  )
}

export default CalculatorPage;
