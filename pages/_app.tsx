import { FirebaseAppProvider } from "reactfire";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";
import Head from "next/head";
import { useEffect } from "react";

import ThemeConfig from "../common/theme";
import { useRouter } from "next/router";
import { ContextProvider } from "../components/Unknown/Context/Context";
import { AuthenticatedLayout } from "../Layouts/AuthenticatedLayout/AuthenticatedLayout";
import { NextPage } from "next";
import { ReactElement } from "react";

var firebaseConfig = {
  apiKey: "AIzaSyC6uZ6mD3qiXykSjDZwlcAtU_iPKwTQZq4",
  authDomain: "social-network-32841.firebaseapp.com",
  projectId: "social-network-32841",
  storageBucket: "social-network-32841.appspot.com",
  messagingSenderId: "89759638462",
  appId: "1:89759638462:web:e30d8a3c278ca7f173cfef",
  measurementId: "G-99TVNM44JQ",
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
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
  );
}
