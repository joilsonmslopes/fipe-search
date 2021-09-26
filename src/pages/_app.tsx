import { AppProps } from "next/app";
import { SearchProvider } from "../contexts/SearchContext";
import GlobalStyle from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </SearchProvider>
  );
}

export default MyApp
