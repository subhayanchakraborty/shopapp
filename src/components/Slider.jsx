import React, { useState } from "react";
import styled from "styled-components";
import {ArrowLeftOutlined,ArrowRightOutlined} from "@material-ui/icons";
import DataItems from "../pages/Data";
import mobile from "../responsive";

//styling the container
const Container=styled.div`
height:100vh;
width:100%;
display:flex;
background-color: #3D8361;
position:relative;
margin-top: 15px;
overflow:hidden;
${mobile({display:"none"})}

`
//styling the arrows
const Arrow=styled.div`
width:50px;
height:50px;
background-color: #F9F9F9;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left: ${props=> props.direction==="left" && "10px"};
right: ${props=> props.direction==="right" && "10px"};
margin:auto;
cursor:pointer;
z-index:2;
`
//styling the wrapper
const Wrapper=styled.div`
height:100%;
display:flex;
transform:translateX(${props=>props.slideIndex* -100}vw);
transition: all 1.3s;
`
//styling the slides
const Slide=styled.div`
display:flex;
align-items:center;
height:100vh;
width:100vw;
background-color: #${props=> props.bg};
`
//styling image container
const Imgcontainer=styled.div`
flex:1;
height:100%;
`
//styling image 
const Img= styled.img`
height:80%;
`
//styling text container
const TextContainer=styled.div`
flex:1;
padding:50px;
`
//styling the title text
const Title=styled.h1`
font-size: 60px;
`
//styling the description text
const Description=styled.p`
font-size: 20px;
letter-spacing: 2px;
margin: 50px 0;
`
//map function to enter data automatically
function createData(item){
  return <Slide bg={item.bg}>
  <Imgcontainer>
  <Img src={item.img}/>
  </Imgcontainer> 
   <TextContainer><Title>{item.title}</Title><Description>{item.des}</Description></TextContainer>
 </Slide>
}

function Slider(){
  const [slideIndex,setSlideIndex]=useState(0); //reactHooks(useState)
  //function for handleClick
  const HandleClick=(direction)=>{
  if(direction==="left"){
    setSlideIndex(slideIndex>0?slideIndex-1:1) 
  } else setSlideIndex(slideIndex<1?slideIndex+1:0)
}
return (<Container>
       <Arrow direction="left" onClick={()=>HandleClick("left")}><ArrowLeftOutlined/></Arrow>
       <Wrapper slideIndex={slideIndex}>
       {DataItems.map(createData)}  
       </Wrapper>
       <Arrow direction="right" onClick={()=>HandleClick("right")}><ArrowRightOutlined/></Arrow>
       </Container>)
}

export default Slider;