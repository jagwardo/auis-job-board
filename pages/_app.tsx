import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { Header } from "@components/header";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
