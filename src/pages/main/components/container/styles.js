import styled from 'styled-components'

export const Box = styled.div`
border: 1px solid ${({theme}) => theme.colors.gray};
flex-direction: row;
border-top: none;
display: flex;
height: 50px;
width: 100%;
`

export const Button = styled.button`
background-color: transparent;
cursor: pointer;
height: 50px;
border: none;
width: 50px;
`
