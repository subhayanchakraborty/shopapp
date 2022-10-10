
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mobile from "../responsive";

const Container=styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit: cover;
${mobile({height:"30vh"})}
`
const Title=styled.h1`
color:white;
margin-bottom:12px;
`
const Button=styled.button`
border:none;
padding: 5px;
color: black;
background-color:white;
cursor:pointer;
`
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

// when user clicks a particular category item he is redirected to /products/:category route which basically
//is productsList page
function CategoryItem({item}){
    return <Container>
          <Link to={`/products/${item.cat}`}> 
           <Image src={item.img}/>
           <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
           </Info>
           </Link>
          </Container>
          
}

export default CategoryItem;