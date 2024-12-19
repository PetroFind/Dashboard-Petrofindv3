import styled from 'styled-components';

export const Container = styled.div`
color: ${({theme}) => theme.colors.primary};
width: ${({width}) => width};
text-transform: capitalize;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 12px;
display: flex;
height: 100%;
gap: 12px;
`