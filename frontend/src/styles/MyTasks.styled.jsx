import styled from "styled-components";



export const MyTasksContainer = styled.main`
display: flex;
flex-direction: column;
width: 75%;
height: fit-content;
background-color: #7F738C;
display: grid;

grid-template-columns: 5fr 1fr;
grid-template-rows: 50px 9fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
border-radius:2rem;
box-shadow: 2.8px 2.8px 2.2px rgb(0 0 0 / 7%), 
6.7px 6.7px 5.3px rgb(0 0 0 / 5%), 12.5px 12.5px 10px rgb(0 0 0 / 4%), 
22.3px 22.3px 17.9px rgb(0 0 0 / 4%), 41.8px 41.8px 33.4px rgb(0 0 0 / 3%), 
100px 100px 80px rgb(0 0 0 / 2%);
`

export const TasksHeader = styled.div`
z-index: 5;
display: flex;
align-items: center;
justify-content: center;
grid-area: 1 / 1 / 2 / 3; 
font-size: 2rem;
border-top-left-radius: 2rem;
border-top-right-radius: 2rem;
height: 50px;

p{
    margin: 0;
}

`

export const LeftPortion = styled.div`
display: flex;
align-items: center;
justify-content: center;
grid-area: 1 / 1 / 2 / 2; 
background-color: #41364e;
border-top-left-radius: 2rem;
height: 50px;
`

export const RightPortion = styled.div`
background-color: #41364e;
grid-area: 1 / 2 / 2 / 3;
display: flex;
align-items: center;
justify-content: center;
border-top-right-radius: 2rem;
height: 50px;

`

export const AddTaskButton = styled.button`
width: 50%;
height: 35px;
z-index:10;
color: white;
font-family: Poppins;
display: flex;
align-items: center;
justify-content: center;
align-content: center;
border-radius: 0.5rem;
border:2px solid white;
background-color: #534563;
box-shadow:
  0.2px 0.2px 0.4px rgba(0, 0, 0, 0.19),
  0.5px 0.4px 1px rgba(0, 0, 0, 0.141),
  0.9px 0.7px 1.8px rgba(0, 0, 0, 0.119),
  1.4px 1.1px 3.1px rgba(0, 0, 0, 0.103),
  2.4px 1.9px 5px rgba(0, 0, 0, 0.087),
  4.2px 3.2px 8.8px rgba(0, 0, 0, 0.071),
  9px 7px 19px rgba(0, 0, 0, 0.049)
;
&:active
{
    box-shadow: none;
    background-color: #41364e;
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