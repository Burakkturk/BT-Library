import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-transform: uppercase;
    font-family: "Almendra Display", serif;
}
body {
    font-size: 1.5rem;
    background-color: ${({theme}) => theme.colors.mainColor};
}
`