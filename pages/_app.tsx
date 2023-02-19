import Navbar from "@/components/Navbar";
import ThemeContext, { Theme } from "@/components/themeContext";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";

const themes = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  },
};

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../utilities/mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            ...themes[theme],
          }}
        >
          <Navbar />
          <Component {...pageProps} />;
        </div>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}
