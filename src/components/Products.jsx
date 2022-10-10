import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ProductsData from "../pages/ProductsData";
import Product from "./Product";


const Container=styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between;
`


function CreateItem(entry){
return (<Product
  image={entry.img}/>
)
}

function Products({cat}){
  const [products,setProducts]=useState([]);
  
  useEffect(()=>{
  const getProducts=async ()=>{
    try{
    const res=await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`
        :"http://localhost:5000/api/products");
    setProducts(res.data);
    }catch(err){
      console.log(err);
    }
  };
  getProducts()
  },[cat])  //this means when cat changes run this function and get products from our api
            //For get and post req we will use axios library


    return <Container>
        {ProductsData.map(CreateItem)}
    </Container>
}

export default Products;