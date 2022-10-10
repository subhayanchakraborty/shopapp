import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import mobile from "../responsive";

const Container=styled.div`
display:flex;
${mobile({flexDirection:"column"})}

`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:10px;`
const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`

const Right=styled.div`
flex:1;
padding:20px`

const Logo=styled.h1`
`
const Desc=styled.p`
margin:20px 0px;
`
const SocialMedia=styled.div`
display:flex;
`
const Title =styled.h3`
margin-bottom:30px;`

const List =styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`

const ListItem=styled.li`
width:50%;
margin-bottom:10px;
`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:15px;
`
const ContactItem =styled.div`
margin-bottom:15px;
displex:flex;
align-items:center;
`
const Payment=styled.img`
width:50%;
`

function Footer(){
    return (
        <Container>
         <Left><Logo>LOGO</Logo>
         <Desc>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here, content here', making it look like readable English.</Desc>
         <SocialMedia><SocialIcon  color="277BC0"><Facebook/></SocialIcon>
         <SocialIcon  color="F94892"><Instagram/></SocialIcon>
         <SocialIcon  color="89CFFD"><Twitter/></SocialIcon>
         </SocialMedia>
         </Left>
         <Center><Title>Useful Links</Title>
         <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
         </List></Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"8px"}}/>Nit Silchar,Fakiratilla,Silchar,Assam 788010</ContactItem>
            <ContactItem><Phone style={{marginRight:"8px"}}/>91 987654321</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"8px"}}/>subhayan2904@gmail.com</ContactItem>
            <Payment src="http://i.ibb.co/Qfvn4z6/payment.png"/>
         </Right>
        </Container>
    )
}


export default Footer;