import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 20px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  @media screen and (max-width:430px){
     padding:30px;
  }



`
export const ScoreContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  width:70vh;
  height:15vh;
  @media screen and (max-width:430px){
     width:10vh;
  } 
  @media screen and (max-width:576px){
     width:50vh;
  } 
  
`

export const Heading = styled.h1`
  color: #fff;
  font-family: 'Bree Serif';
  font-size: 17px;
`

export const ItemsContainer = styled.div``

export const ScoreCardContainer = styled.div`
   
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 10px;
  height:100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media screen and (max-width:576px){
     height:70px;
  } 
`

export const ParagraphScore = styled.p`
  font-family: 'Bree Serif';
  color :#223a5f;
  font-size:20px;
  margin:0px;
  
  
`

export const ScoreSpan = styled.p`
  font-family: 'Roboto';
  color :#223a5f; 
  font-size:30px;
  margin:0px;

`

export const ButtonsContainer = styled.ul`
  display:flex;
  flex-direction:row;
  justify-content:center;
  flex-wrap:wrap;


`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width:100%;
   
`

export const PopUpButton = styled.button`
  height:60px;
  font-family:'Bree Serif';
  font-weight:500;
  font-size:20px;
  border:none;
  border-radius:10px;
  outline:none;
  width:90px;
  cursor:pointer;
`

export const RulesImageContainer = styled.div`
  padding:20px;
 
`

export const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width:100%;
 
  

`

export const CloseButton = styled.button`
  background-color:transparent;
  border:none;
  outline:none;
   cursor:pointer;
`

export const RulesImage = styled.img`
  height:500px;
  border-radius:10px;
  margin-left:30px; 
  @media screen and (max-width:576px){
     height:200px;
     display:flex;
     align-self:center;
     margin-left:0px;
  } 
  @media screen and (max-width:992px){
     height:300px;
     display:flex;
     align-self:center;
     margin-left:0px;
  } 
`
