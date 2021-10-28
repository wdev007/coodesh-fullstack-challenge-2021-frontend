import * as React from "react";
import { Router } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Routes from "./shared/routes/index.routing";
import history from "./shared/services/history";
import DefaultLayout from "./shared/layouts/Default";

export const App = () => (
  <ChakraProvider theme={theme}>
    <DefaultLayout>
      <Router history={history}>
        <Routes />
      </Router>
    </DefaultLayout>
  </ChakraProvider>
);
