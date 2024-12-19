import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    overflow-y: scroll;
    padding: 0 12px;
    display: flex;
    height: auto;
    width: 100%;
    gap: 24px;
`

export const Header = styled.div`
color: ${({theme}) => theme.colors.primary};
align-items: center;
font-size: 12px;
width: 50px;
cursor: pointer;
display: flex;
gap: 6px;
`
export const GraphRow = styled.div`
align-items: center;
display: flex;
width: 100%;
gap: 12px;
`

export const LineChartBox = styled.div`
justify-content: space-between;
border-top: 2px solid ${({theme}) => theme.colors.gray};
padding: 24px 0;
display: flex;
height: 60vh;
width: 100%;

& > section {
    place-items: center;
    padding: 12px;
    display: grid;
    height: 100%;
    flex: 1;
}
`

export const Box = styled.div`
border: 2px solid ${({theme}) => theme.colors.gray};
border-radius: 10px;
width: 150px;
`

export const MapBox = styled.div`
border-radius: 10px;
height: 100vh;
width: 100%;

& > section {    
    flex-direction: row;
    padding: 0 12px;
    display: flex;
    width: 100%;
    gap: 12px;
}
`

export const InfoBox = styled.div`
border-radius: 10px;
display: flex;
width: 100%;
`

export const InfoItem = styled.div`
border: 1px solid ${({theme}) => theme.colors.primary};
width: calc(100% / 4);
height: 25vh;

&:first-child {
border-radius: 10px 0 0 10px;
}

&:last-child {
border-radius: 0 10px 10px 0;
}
`

export const SecondaryGraphRow = styled.div`
width: 100%;
height: 60vh;
border-radius: 10px;
display: flex;
gap: 12px;
flex-direction: row;
align-items: center;
`

export const TertiaryGraphRow = styled.div`
width: 100%;
height: 75vh;
border-radius: 10px;
border: 1px solid black;
`
