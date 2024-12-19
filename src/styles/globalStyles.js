import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
  
}

* {
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
  box-sizing: border-box;
  font-size: 16px;
  padding: 0;
  margin: 0;
}

p, a, h1 {
  color: ${({theme}) => theme.colors.text};
}

body {
  background: ${({theme}) => theme.colors.background};

}
::-webkit-scrollbar-track {
    display: none;
}
::-webkit-scrollbar {
    width: 6px;
  
   
}
::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.secondary};
    border-radius: 6px;
}
`

export default GlobalStyle