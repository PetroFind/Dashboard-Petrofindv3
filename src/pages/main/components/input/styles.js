import styled from "styled-components";

export const Container = styled.div`
height: auto;
width: auto;
display: flex;
flex-direction: column;
gap: 6px;
`

export const InputComponent = styled.input`
background-color: ${({theme}) => theme.colors.gray};
color: ${({theme}) => theme.colors.primary};
width: ${({width}) => width};
border-radius: 5px;
padding: 0 12px;
outline: none;
font-size: 12px;
height: 50px;
border: none;
`

export const Label = styled.label`
color: ${({theme}) => theme.colors.primary};
font-size: 12px;
font-weight: 600;

`