import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import NavBar from "./NavBar";


const Header = () =>{
    


    return(
    <>
    <header>
        <div>
            <div className="logoNav">
                <img src={Logo} alt="" />
                <h1>SIaRINDE</h1>
            </div>
            <div>  
                <p>Alquiler de canchas, profesores y venta de articulos deportivos</p>
            </div>
        </div>
        
        <NavBar></NavBar>
        
      
      </header>
        
      </>
    )}


export default Header