import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { UseTheme } from "../hooks/useTheme";
import "../styles/globals.css";
import { Theme } from "../styles/theme/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (typeof window !== "undefined") {
    localStorage?.setItem("themes", JSON.stringify(Theme));
  }

  const { themeMode, theme } = UseTheme();
  console.log(themeMode, "current theme");
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
