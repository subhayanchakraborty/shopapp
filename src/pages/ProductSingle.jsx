import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mobile from "../responsive";
import {useLocation} from "react-router-dom";
import {publicRequest} from "../requestMethod";



const Container=styled.div`
`
const Wrapper=styled.div`
margin-top:20px;
padding:50px;
display:flex;
${mobile({padding:"10px", flexDirection:"column"})}

`
const ImgContainer=styled.div`
flex:1;
`
const Image=styled.img`
width:60%;
${mobile({height:"40%"})}

`
const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px"})}

`
const Title=styled.h1`
font-weight:100;
`
const Desc=styled.div`
margin:20px 0;
`
const Price=styled.span`
font-weight:100;
font-size:40px;
`
const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight: 700;
`
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`
const Button=styled.button`
padding:15px;
border:1px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;
&:hover{
    background-color: #f8f4f4;
}
`

function ProductSingle(){
    const location=useLocation();
    const id=location.pathname.split("/")[2];
    const [product,setProduct]=useState({});
    useEffect(()=>{
    const getProduct=async ()=>{
        try{
        const res= await publicRequest.get("/products/find/"+id)
        setProduct(res.data);
        }catch{}
    };
    getProduct()
    },[id])
    return (
     <Container>
     <Navbar/>
     <Wrapper>  
     {/* "https://5.imimg.com/data5/LW/YQ/MY-17471615/assam-premium-ctc-black-tea-250x250.jpg" */}
        <ImgContainer>
            <Image src={product.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>There are many variations of passages of Lorem Ipsum available,
             but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Desc>
            <Price>Rs100</Price>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>Add to Cart</Button>
            </AddContainer>
        </InfoContainer>
     </Wrapper>
     <Footer/>
     </Container>
    )
}

export default ProductSingle;