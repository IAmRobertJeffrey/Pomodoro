import styled from "styled-components";


export const DigitContainer = styled.main`

display: flex;
flex-direction: row;
height: 200px;
align-items: center;
justify-content: flex-start;


`

export const TimerContainer = styled.main`
margin-right: 50px;
background-color: #2B2730;
grid-area: timerContainer; 
height: fit-content;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
flex-wrap: wrap;
border-radius: 1rem;
margin-top:50px;
margin-bottom: 50px;
margin-left: 50px;
box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.042),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.028),
  100px 100px 80px rgba(0, 0, 0, 0.02)
;



h1{
    font-size:6rem;
    margin: 0%;
    text-align: center;
   
    font-family: Mono;
    text-shadow: horizontal-offset vertical-offset blur color;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

   
}

`

export const TimerButton = styled.button`
  width: 100%;
  height:50px;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  color: white;
  outline: none;
  border:none;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: ${props => props.btnBackground};

  &:hover
  {
    color: white;
  }

  &:active
  {
    background-color:${props => props.startStop === "Start" ? '#2AF598' : '#722b2b'}

  }


`

export const TypeContainer = styled.div`
width:100%;
height:50px;
display: flex;
flex-direction: row;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
box-shadow:
  0px 4px 1px rgba(0, 0, 0, 0.07),
  0px 9.6px 2.4px rgba(0, 0, 0, 0.05),
  0px 18px 4.5px rgba(0, 0, 0, 0.042),
  0px 32.2px 8px rgba(0, 0, 0, 0.035),
  0px 60.2px 15px rgba(0, 0, 0, 0.028),
  0px 144px 36px rgba(0, 0, 0, 0.02)
;
`

export const TypeOption = styled.div`
width:33.33333%;
height:50px;
background-color:#7F738C;
display: flex;
transition: all 330ms;
align-content: center;
justify-content: center;
align-items: center;
font-size:1rem;
cursor: pointer;


  background-color: ${props => (props.choose1 || props.choose2 || props.choose3 ? "#62586d" : null)};



p{
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  padding: 2rem;
  font-size: 1rem;
  letter-spacing: 0.05em;
}







`
