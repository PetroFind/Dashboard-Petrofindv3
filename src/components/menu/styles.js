import styled from 'styled-components'

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.primary};
align-items: ${({open}) => open ? "start" : "center"};
color: ${({theme}) => theme.colors.secondary};
width: ${({open}) => open ? "25vw" : "5vw"};
transition: all 100ms ease-in-out;
flex-direction: column;
text-align: center;
display: flex;
height: 100vh;
padding: 12px;
gap: 12px;
`

export const Header = styled.div`
justify-content: ${({justify}) => justify ? "end" : "center"};
align-items: center;
display: flex;
height: 50px;
width: 100%;
`