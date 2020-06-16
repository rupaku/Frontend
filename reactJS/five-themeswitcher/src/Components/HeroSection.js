import React, { useContext } from "react"
import AppTheme from "../Colors"
import ThemeContext from "../Context/ThemeContext"

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0]
  const currentTheme = AppTheme[theme]
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}
      >
        Click me
      </button>
    </div>
  )
}

export default HeroSection
