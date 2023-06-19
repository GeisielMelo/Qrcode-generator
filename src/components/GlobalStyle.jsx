import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  background-image: 
    linear-gradient(
      241deg in oklab, 
      rgb(39, 55, 77) 0% 22%, rgb(32% 43% 51%) 100% 112%
    )
  ;
}


section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

`;

export default GlobalStyle;
