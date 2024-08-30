import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  //  a function that toggles between darkmode and lightmode in css

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? 'dark' : 'light');
  const [username, setUsername] = useLocalStorage("name", "tuananh");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    console.log(1);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  console.log(defaultDark)
  return (
    <div className="App">
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <div className="theme-text">{theme}</div>
      <button onClick={() => switchTheme()}>change theme</button>
    </div>
  );
}

export default App;
