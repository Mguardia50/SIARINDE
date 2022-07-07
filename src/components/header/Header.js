import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import NavBar from "./NavBar";
import { Link} from "react-router-dom";

const Header = () =>{
    


    return(
    <>
    <header>
        <div>
            <Link to="/"><div className="logoNav">
                <img src={Logo} alt="" />
                <h1>SIaRINDE</h1>
            </div></Link>
            <div>  
                <p>Alquiler de canchas, profesores y venta de articulos deportivos</p>
            </div>
        </div>
        
        <NavBar></NavBar>
        
      
      </header>
        
      </>
    )}


export default Header