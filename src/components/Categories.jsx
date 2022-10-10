import React from "react";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import DataCategories from "../pages/DataCategories";
import mobile from "../responsive";

const Container=styled.div`
display:flex;
justify-content: space-between;
padding:20px;
${mobile({padding:"0px",flexDirection:"column"})}
`


function Categories(){
return <Container>
{DataCategories.map(item =>
 <CategoryItem item={item} key={item.id}/>
)}
</Container>
}

export default Categories;