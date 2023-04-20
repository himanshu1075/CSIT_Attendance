import styled from "styled-components";
const StyledButton=styled.button`
 border:2px solid #fdc800;
 margin-right: 3%;
background-color:#fdc800;
//background-color:#EEFF41;
color:#1A237E;
transition:0.7s;
 margin-right:"44px";
 padding:7px;
 &:hover{
    background-color:#002147;
    color:white;
    border:2px solid #fdc800;
    transition:0.7s;
 }
`
export default StyledButton;

export const NavButton=styled.button`

font-family:'Times New Roman', Times, serif;
 margin: 1%;
background-color:#fff;
border: 0px;
color:#1A237E;
 margin-right:"44px";
 padding:10px;
 &:hover{
    transition:1s;
    color:#FDC800;
    
 }
`
export const ImageStyle = styled.img`
    height: 15vh;
    
    
    &:hover{
        transition:0.7s;
        height: 16vh;
    }
`

export const newsSection=styled.h3`
    font-family:sans-serif;
 margin: 1%;
background-color:#fff;

color:#fff;
 margin-right:"44px";
 padding:10px;
 &:hover{
    /* transition:1s; */
    color:#FDC800;
 }   
`
export const AboutUsReadMore=styled.button`
   border:2px solid #fdc800;
   background-color:#fff;
   color:#1A237E;
 padding:5px;
 
 &:hover{
    background-color:#fdc800;
    color:white;
    border:2px solid #fdc800;
 }
`