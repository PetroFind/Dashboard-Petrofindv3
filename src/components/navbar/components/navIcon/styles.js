import styled from 'styled-components';


export const Container = styled.div`
   background: ${({theme}) => theme.colors.gray};
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   cursor: pointer;
   display: flex;
   height: 40px;
   width: 40px;

   &:hover{
     background: ${({theme}) => theme.colors.secondaryPetrobras};
     opacity: 0.8;
   }

   & svg {
      color: ${({theme}) => theme.colors.primary};
      font-size: 25px;

    }
   
   &:hover>svg{
     color: ${({theme}) => theme.colors.background};
  }
 
   @media (max-width: 678px) {
     height: 35px;
     width: 35px;

    }
`