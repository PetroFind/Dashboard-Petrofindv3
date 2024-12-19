import styled from "styled-components";

export const Container = styled.div`
flex-direction: column;
padding: 0 12px;
display: flex;
height: 100%;
width: 100%;
`

export const Filter = styled.div`
flex-direction: row;
align-items: end;
display: flex;
width: 100%;
gap: 12px;
`

export const FilterButton = styled.button`
background-color: ${({theme}) => theme.colors.green};
color: ${({theme}) => theme.colors.secondary};
text-transform: capitalize;
place-items: center;
border-radius: 5px;
cursor: pointer;
font-weight: 600;
font-size: 12px;
display: grid;
outline: none;
height: 50px;
width: 125px;
border: none;
`

export const Header = styled.div`
border: 1px solid ${({theme}) => theme.colors.gray};
justify-content: center;
flex-direction: row;
padding: 0 50px;
margin-top: 24px;
display: flex;
height: 50px;
width: 100%;
`

export const Box = styled.div`
flex-direction: column;
display: flex;
height: 100%;
width: 100%;
`