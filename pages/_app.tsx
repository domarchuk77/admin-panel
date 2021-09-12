import { ReactElement, ReactNode, useEffect } from "react";
import { FirebaseAppProvider } from "reactfire";
import type { AppProps as BasicAppProps } from "next/app";
import Head from "next/head";
import { NextPage as BasicNextPage } from "next";

import ThemeConfig from "../common/theme";
import ContextProvider from "../components/Unknown/Context";

const firebaseConfig = {
  apiKey: "AIzaSyC6uZ6mD3qiXykSjDZwlcAtU_iPKwTQZq4",
  authDomain: "social-network-32841.firebaseapp.com",
  projectId: "social-network-32841",
  storageBucket: "social-network-32841.appspot.com",
  messagingSenderId: "89759638462",
  appId: "1:89759638462:web:e30d8a3c278ca7f173cfef",
  measurementId: "G-99TVNM44JQ",
};

type NextPage = BasicNextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppProps = BasicAppProps & {
  Component: NextPage;
};

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeConfig>
        <ContextProvider>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </ContextProvider>
      </ThemeConfig>
    </FirebaseAppProvider>
  );
}
