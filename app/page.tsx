'use client'

// Node Modules
import { useState } from "react";

// Component
import Toggle from "@/components/Toggle";

const CalculatorPage = () => {
  const [toggleTheme, setToggleTheme] = useState(1);

  const handleClickToggle = () => {
    setToggleTheme((toggleTheme%3) + 1);
  };

  return (
    <main className="min-h-screen bg-main-1">
      <div className="block max-w-xl mx-auto py-20">
        <div className="flex justify-between space-x-0 h-full w-full items-center">
          <h1 className="text-2xl font-bold text-white ">calc</h1>
          <div className="flex">
            <p className="text-sm font-bold text-white mr-8 pb-1 self-end">THEME</p>
            <Toggle currentTogglePosition={toggleTheme} onClickToggle={handleClickToggle} toggleAmount={3} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default CalculatorPage;
