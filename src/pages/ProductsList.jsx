import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import mobile from "../responsive";
import { useLocation } from "react-router-dom";
const Container=styled.div`

`
const Title=styled.h1`
margin:20px;
margin-top:30px;
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`
const Filter=styled.div`
margin:20px;
${mobile({margin:"0 20px",display:"flex",flexDirection:"column"})}
`
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({marginRight:"0px"})}
`
const Select=styled.select`
padding:10px;
${mobile({margin:"10px 0px"})}
`
const Option=styled.option`
`
function ProductsList(){
    const location=useLocation();
 //console.log(location.pathname.split("/")[2]); //split from "/"" and take 2nd element(i.e take only category parameter)
// so we are taking the category parameter from url(whether user has entered by himself or clicked the category item)
    const cat=location.pathname.split("/")[2];
    return ( <Container>
    <Navbar/>
    <Title>{cat}</Title>
   
    <Products cat={cat}/>
    <Footer/>
     </Container>
    )
}


export default ProductsList;




 {/* <FilterContainer>
        <Filter><FilterText>Filter Products</FilterText>
        <Select>
           <Option disabled selected>Color</Option>
           <Option>white</Option>
           <Option>black</Option> 
           <Option>blue</Option> 
           <Option>red</Option>  
        </Select>
        </Filter> */}
        {/* <Select>
        <Option disabled selected>Size</Option>
           <Option>S</Option>
           <Option>M</Option> 
           <Option>L</Option> 
           <Option>XL</Option>  
       </Select> */}
        {/* 
        <Filter><FilterText>Sort Products</FilterText></Filter>
        <Select>
           <Option selected>Newest</Option>
           <Option>Price(asc)</Option>
           <Option>Price(des)</Option> 
 
        </Select> */}
    
    {/* </FilterContainer> */}