import { ThemeProvider } from "styled-components";
import { UseTheme } from "../hooks/useTheme";
import "../styles/globals.css";
import { Theme } from "../styles/theme/theme";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    localStorage?.setItem("themes", JSON.stringify(Theme));
  }

  const { themeLoaded, themeMode, toggleTheme, theme } = UseTheme();
  console.log(themeMode, "current theme");
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
