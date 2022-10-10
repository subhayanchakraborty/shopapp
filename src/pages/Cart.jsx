import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import mobile from "../responsive";


const Container=styled.div``
const Wrapper=styled.div`
padding:20px;
${mobile({padding:"10px"})}
`

const Title=styled.h1`
font-weight:300;
text-align:center;
`
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const TopButton=styled.button`
flex:1
width:40%;
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props=>props.type==="filled"&&"none"};
background-color: ${props=>props.type==="filled"?"black":"transparent"};
color:${props=>props.type==="filled"&&"white"};
`
const TopTexts=styled.div`
${mobile({display:"none"})}

`

const TopText=styled.span`
text-decoration:underline;
cursor:pointer;
margin: 0 10px;`

const Bottom=styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}

`
const Info=styled.div`
flex:3;
`

const Product=styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`;
const ProductDetail=styled.div`
flex:2;
`;
const Image=styled.img`
width: 200px;`

const Details=styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName=styled.span``
const ProductId=styled.span``
const PriceDetail=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const ProductAmountContainer=styled.div`
display:flex;
align-items:center;
font-size:24px;
margin:5px;
`
const ProductAmount=styled.div``
const ProductPrice=styled.div`
font-size:30px;
font-weight:200;
`

const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const SummaryTitle=styled.h1`
font-weight:200;`
const SummaryItem=styled.div`
margin: 30px 0;
display:flex;
justify-content:space-between;
font-weight: ${props=>props.type==="Total" && "500"}
font-size: ${props=>props.type==="Total" && "24px"}
`
const SummaryItemText=styled.span`
`
const SummaryItemPrice=styled.span``
const Button=styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
`



function Cart(){
    return(
    <Container>
        <Navbar/>
        <Wrapper>
        <Title>Your Bag</Title>
        <Top><TopButton>Continue Shopping</TopButton>
        <TopTexts>
        <TopText>Green Tea(2)</TopText>
        <TopText>Your wishlist(0)</TopText>
        <TopButton type="filled">Check Out Now</TopButton>
        </TopTexts>
        </Top>
        <Bottom>
            <Info><Product>
            <ProductDetail>
               <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzC7FuuF9TGRA21q8OcUgG6eFn-vMDGhoBtg&usqp=CAU" />
            <Details>
            <ProductName><b>Product:</b>HOOKHMOL TEA</ProductName>
            <ProductId><b>Id:</b>13425463</ProductId>
            </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                </ProductAmountContainer>
                <ProductPrice>Rs 100</ProductPrice>
            </PriceDetail>
            </Product></Info>
            <Summary><SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>Rs100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>Rs 20</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="Total">
            <SummaryItemText >Total</SummaryItemText>
            <SummaryItemPrice>Rs 120</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
            </Summary>
           
        </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
    )
}

export default Cart;
