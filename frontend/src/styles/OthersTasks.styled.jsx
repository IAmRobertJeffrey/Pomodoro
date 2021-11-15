import styled from "styled-components";

export const OthersTasksContainer = styled.main`
width: 25%;
height: fit-content;
background-color: #7F738C;
margin-right: 50px;
border-radius: 2rem;
box-shadow: 2.8px 2.8px 2.2px rgb(0 0 0 / 7%), 
6.7px 6.7px 5.3px rgb(0 0 0 / 5%), 12.5px 12.5px 10px rgb(0 0 0 / 4%), 
22.3px 22.3px 17.9px rgb(0 0 0 / 4%), 41.8px 41.8px 33.4px rgb(0 0 0 / 3%), 
100px 100px 80px rgb(0 0 0 / 2%);
`

export const TasksHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
border-top-left-radius: 2rem;
border-top-right-radius: 2rem;
background-color: #41364e;

p{
    margin: 0;
}

`

export const TasksContent = styled.div`
grid-area: 2 / 1 / 3 / 3;
background-color: #7F738C;
width:100%;
height: fit-content;
border-bottom-left-radius: 2rem;
border-bottom-right-radius: 2rem;
display: flex;
flex-direction:column;
font-size:1rem;
padding: 2rem;
`