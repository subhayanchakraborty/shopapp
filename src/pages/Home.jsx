import  Slider  from "../components/Slider.jsx";
import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories.jsx";
import Products from "../components/Products.jsx";
import Footer from "../components/Footer.jsx";

function Home(){
return (<div><Navbar/>
<Slider/>
<Categories/>
<Products/>
<Footer/>
</div>)
}

export default Home;