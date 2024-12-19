import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  flex-direction: column;
  display: flex;
  height: auto;
  width: 100%;
  gap: 12px;
`;

export const Box = styled.div`
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  width: 100%;

  & > section {
    display: flex;
      font-size: 12px;
      align-items: center;
    gap: 6px;
  }
  
  & > section > p {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
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
  border: 2px solid ${({ theme }) => theme.colors.border};
  transform: rotate(45deg);
  height: 12px;
  width: 12px;
`;