import { ApolloProvider } from "@apollo/client";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import { Home } from "./src/screens/Home";
import { client } from "./src/utils/apolloClient";

// Define the config
const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider theme={theme}>
        <Home />
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
