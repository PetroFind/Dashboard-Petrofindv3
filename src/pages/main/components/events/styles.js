import styled from "styled-components";

export const Container = styled.div`
justify-content: end;
margin-top: 12px;
display: flex;
height: auto;
width: 100%;
gap: 12px;
`
 
export const Button = styled.button`
border: 1px solid ${({theme}) => theme.colors.gray};
color: ${({theme}) => theme.colors.primary};
background-color: transparent;
place-items: center;
border-radius: 5px;
cursor: pointer;
outline: none;
height: 50px;
display: grid;
width: 50px;
`