import { useState, useEffect } from "react";

import "./App.css";

function App() {
  //  a function that toggles between darkmode and lightmode in css

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark || 'light');
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    console.log(1);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="App">
      <div className="theme-text">{theme}</div>
      <button onClick={() => switchTheme()}>change theme</button>
    </div>
  );
}

export default App;
