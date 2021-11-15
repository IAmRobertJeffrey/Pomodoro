import styled from "styled-components";


export const AppWrapper = styled.main`
    
    font-family: Poppins;
    font-size:3rem;
    color: white;
  
    background: ${props => props.background};
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-auto-rows: 1fr; 
    grid-template-columns: 1fr 4fr; 
    grid-template-rows: 50px 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "header header"
      "timerContainer ."; 
    grid-area: app; 




`