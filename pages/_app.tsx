import Navbar from "@/components/Navbar";
import ThemeContext, { Theme } from "@/lib/themeContext";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultSeo } from "next-seo";
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
        <DefaultSeo
          title="Next SEO Example"
          description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://www.url.ie/",
            siteName: "SiteName",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
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
