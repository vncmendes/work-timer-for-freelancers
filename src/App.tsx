import { BrowserRouter } from "react-router-dom"; // para usar o react-router-dom, é necessário importar o BrowserRouter e envolver os elementos envolvidos nas rodas por ele, para funcionar.
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}
