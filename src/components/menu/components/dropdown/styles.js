import styled from "styled-components";

export const Container = styled.div`
flex-direction: column;
font-size: 12px;
display: flex;
height: auto;
width: 100%;
gap: 12px;
`;

export const Box = styled.div`
  justify-content: ${({open}) => open ? "space-between" : "center"};
  background-color: ${({theme}) => theme.colors.gray};
  color: ${({theme}) => theme.colors.primary};
  box-sizing: border-box;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  font-weight: 600;

  display: flex;
  padding: 12px;
  height: 50px;
  width: 100%;

  & > section {
    display: flex;
      font-size: 12px;
      align-items: center;
    gap: 6px;
  }
  
  & > section > p:first-letter {
    text-transform: uppercase;
  }
`;

export const Items = styled.ul`
  transition: ease-in-out 1s;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
  list-style: none;
  display: flex;
  padding: 12px;
  ${({ open }) =>
    open
      ? `
  `
      : `
  `}
  width: 100%;
  gap: 12px;
`;

export const Item = styled.li`
align-items: center;
cursor: pointer;
font-size: 12px;
display: flex;
gap: 12px;
`;

export const Icon = styled.div`
border: 2px solid ${({ theme }) => theme.colors.secondary};
transform: rotate(45deg);
height: 12px;
width: 12px;
`;