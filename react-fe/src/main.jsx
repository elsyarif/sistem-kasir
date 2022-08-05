import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import { themes } from "./themes";
import "./index.css";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from "./app/store"

const theme = extendTheme({themes})

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store} >
      {/* <PersistGate persistor={persistor}> */}
        <BrowserRouter>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
);
