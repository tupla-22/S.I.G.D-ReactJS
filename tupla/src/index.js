import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#99173c",
      second:"#004853",
      third:"#00b9bd"
    },
    secondary: {
      main:"#fb6900" ,
      second:"#f63700"
    },
    
  },
});

root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
