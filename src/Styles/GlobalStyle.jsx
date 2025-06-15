import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #006D77;
  --background-color-dark: #0F0F0F;
  --text-color-secondry: #aaaaaa;
  --foucs-color: #7b71c6
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1;
  font-weight: 400;
}
`;

export default GlobalStyle;
