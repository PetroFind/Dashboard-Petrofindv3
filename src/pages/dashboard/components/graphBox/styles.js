import styled from 'styled-components';

export const Container = styled.div`
border: 1px solid ${({theme}) => theme.colors.primary};
height: ${({height}) => height ?? "auto"};
width: ${({width}) => width ?? "auto"};
padding: 12px;
display: flex;
justify-content: space-between;
border-radius: 10px;
flex-direction: column;
`