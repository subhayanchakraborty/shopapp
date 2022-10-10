import React from "react";
import styled from "styled-components";
import mobile from "../responsive";

const Container=styled.div`
width:100vw;
height:100vh;
background-color:#2B7A0B;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper=styled.div`
padding:20px;
width:25%;
background-color:white;
${mobile({width:"75%"})}
`
const Title=styled.h1`
font-size:24px;
font-weight:300;`

const Form=styled.form`
display:flex;
flex-direction:column;
`

const Input=styled.input`
flex:1;
min-width:40%;
margin: 10px 0 ;`

const Button=styled.button`
margin-top:10px;
border:none;
width:40%;
padding: 15px 20px;
background-color:teal;
color: white;
cursor:pointer;
margin-bottom:10px;
`
const Link=styled.a`
margin: 5px 0;
font-size:12;
text-decoration: underline;
cursor:pointer;
`


function Login(){
    return (
        <Container>
         <Wrapper>
        <Title>Sign In</Title>
        <Form>
           <Input placeholder="username"/>
           <Input placeholder="password"/> 
        <Button>Login</Button>
        <Link>Create a new account</Link>
        </Form>
        </Wrapper>
        </Container>
    )
}

export default Login;