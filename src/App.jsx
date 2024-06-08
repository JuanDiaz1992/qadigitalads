import Home from "./pages/home";
import "./normalizer.css";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { LanguageProvider } from "./context/languajeProvider";


function App({ Component, pageProps }) {

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <LanguageProvider>
          <Home {...pageProps} />
        </LanguageProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default App
