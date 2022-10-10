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
width:40%;
background-color:white;
${mobile({width:"75%"})}
`
const Title=styled.h1`
font-size:24px;
font-weight:300;`

const Form=styled.form`
display:flex;
flex-wrap:wrap;
`

const Input=styled.input`
flex:1;
min-width:40%;
margin: 20px 20px 0 0 ;`

const Button=styled.button`
margin-top:10px;
border:none;
width:40%;
padding: 15px 20px;
background-color:teal;
color: white;
cursor:pointer;
`


function Register(){
    return (
        <Container>
        <Wrapper>
        <Title>Create An Account</Title>
        <Form>
           <Input placeholder="fullname"/>
           <Input placeholder="email"/> 
           <Input placeholder="password"/> 
           <Input placeholder="confirmpassword"/> 
        <Button>Create</Button>
        </Form>
        </Wrapper>
        </Container>
    )
}

export default Register;