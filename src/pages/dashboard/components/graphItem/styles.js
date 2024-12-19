import styled from "styled-components";

export const Container = styled.div`
flex-direction: column;
align-items: center;
display: flex;
gap: 6px;
`

export const Value = styled.div`
color: ${({theme}) => theme.colors.text};
font-weight: bold;
font-size: 14px;
`

export const Text = styled.div`
color: ${({theme}) => theme.colors.text};
font-size: 10px;
`