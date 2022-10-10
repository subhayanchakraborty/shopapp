
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info =styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:3;
display:flex;
align-items:center;
justify-content:center;
background-color: rgba(0,0,0,0.2);
transition: all 0.5s ease;
cursor:pointer;
`
const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height: 350px;
display:flex;
align-items:center;
justify-content:center;
background-color: #f5fbfd;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`
const Circle=styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color: white;
position:absolute;
`
const Image=styled.img`
height:75%;
z-index:2;
`
const Icon=styled.div`
height:40px;
width:40px;
border-radius:50%;
background-color: white;
display:flex;
align-items:center;
justify-content:center;
margin:5px;
&:hover{
    background-color: #FFFAE7;
    transform: scale(1.1);
}
`


function Product(props){
    return  (
        <Container>
         <Circle>
            <Image src={props.image}/>
            <Info>
                <Icon><ShoppingCartOutlined/></Icon>
                <Icon><Link to={`/product/${props._id}`}><SearchOutlined/></Link></Icon>
                <Icon><FavoriteBorderOutlined/></Icon>
            </Info>
         </Circle>
        </Container>
    )
}

export default Product;