import { useEffect, useState } from "react";

export const UseTheme = () => {
  const [theme, setTheme] = useState({});
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    if (themeMode) {
      const { lightTheme } = JSON.parse(localStorage?.getItem("themes"));

      setTheme(lightTheme);

      // console.log("lightmode");
    } else {
      const { darkTheme } = JSON.parse(localStorage?.getItem("themes"));

      setTheme(darkTheme);
      // console.log("darkmode");
    }
    setThemeLoaded(true);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(!themeMode);
    console.log(themeMode, "theme mode");
  };

  return { theme, themeLoaded, toggleTheme, themeMode };
};
