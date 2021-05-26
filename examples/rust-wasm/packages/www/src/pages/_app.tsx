import { AppProps } from "next/app";
import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { TwinGlobalStyles } from "../styles/TwinGlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TwinGlobalStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
