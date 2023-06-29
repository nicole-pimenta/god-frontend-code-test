import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  text-decoration: none;
}

img {
  max-width: 100%;
}

ul , ol {
    list-style: none;
}

button{
    cursor: pointer;
    background: transparent;
    border: 0;
}

:root {
  --color-primary: #FD377E;
  --color-primary-2: #e34981;
  --color-secondary:#03b898;
  --color-grey-1:  #ffffff;
  --color-grey-2:  #868e96;
  --color-grey-3:  #000000;
  --bg-color:  #3D3632;
  --bg-color-2: #F5F5F5;;
  --radius-default: 0.5rem;
  --title-1: 38px;
  --title-2: 22px;
  --title-3: 16px;
  --title-4: 12px;
  --text-1: 16px;
  --text-2: 12px;

}

body {
height: 100vh;
font-family: "Nunito", sans-serif;
background: var(--bg-color);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

`;
