import styled from 'styled-components';

export const Container = styled.div`
height: 75px;
width: 100%;
display: flex;
padding: 0 12px;
align-items: center;
justify-content: end;
`

export const Section = styled.section`
color: ${({theme}) => theme.colors.primary};
justify-content: center;
align-items: center;
font-size: 12px;
cursor: pointer;
display: flex;
height: 20px;
width: 75px;
gap: 12px;
`