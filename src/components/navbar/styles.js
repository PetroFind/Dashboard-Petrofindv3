import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Box = styled.div`
border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
background-color: ${({ theme }) => theme.colors.secondary};
justify-content: space-between;
  box-sizing: border-box;
  flex-direction: row;
  display: flex;
  padding: 12px;
  height: 75px;
  width: 100%;
  
  & > section {
    color: ${({theme}) => theme.colors.primary};
    align-items: center;
    font-weight: 600;
    font-size: 28px; 
    display: flex;
    height: 100%;
    gap: 24px;
  }
`

export const IconsArea = styled.div`
 align-items: center;
 display: flex;
 height: 100%;
 width: auto;
 gap: 20px;
`