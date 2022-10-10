import React from "react";
import styled from "styled-components";
import {Search,ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import mobile from "../responsive";

const Container=styled.div`
height:50px;
${mobile({height:"50px"})}
`
const Wrapper=styled.div`
background-color: #EEF2E6;
padding: 15px;
display:flex;
justify-content: space-between;
align-items:center;
${mobile({padding:"10px 0"})}
`
const Input=styled.input`
border:none;
padding:5px;
${mobile({width:"50px"})}
`
const SearchContainer=styled.div`
border: 1px solid lightgray;
display:flex;
align-items:center;
margin-left: 10px;
`
const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`
const Left=styled.div`
flex:1;
display:flex;
`
const Center=styled.div`
flex:1
text-align:center;
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2,justifyContent:"center"})}
`
const MenuItem=styled.div`
font-size=14;
cursor:pointer;
margin:10px;
${mobile({fontSize:"12px",marginLeft:"10px"})}

`
function Navbar(){
return (<Container><Wrapper>
       <Left><SearchContainer>
        <Input placeholder="Search"/>
       <Search style={{color:"black",fontSize:18}}/>
       </SearchContainer></Left>
       <Center><Logo>LOGO</Logo></Center>
       <Right>
       <MenuItem>Register</MenuItem>
       <MenuItem>Sign in</MenuItem>
       <MenuItem>
       <Badge badgeContent={4} color="primary">
       <ShoppingCartOutlined/>
       </Badge>
       </MenuItem></Right>
       </Wrapper>
       </Container>)
}

export default Navbar;