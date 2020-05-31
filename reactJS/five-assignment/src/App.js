import React, { useState } from "react"
import ThemeContext from "./Context/ThemeContext"
import HeroSection from "./Components/HeroSection"

const App = () => {
  const ThemeHook = useState("light")
  return (
    <ThemeContext.Provider value={ThemeHook}>
      <div>
        <h1>ThemeToggler</h1>
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
