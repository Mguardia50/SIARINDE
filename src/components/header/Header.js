import React from "react";
import "./Header.css";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Logo from "../../assets/logo.png";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import SportsBaseballTwoToneIcon from '@mui/icons-material/SportsBaseballTwoTone';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountMenu from "./MenuNav";
import CartWidget from "./CartWidget";

const Header = () =>{
    const [value, setValue] = React.useState(0);


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
        
        
        <nav>
            
        {/* <a href=""><FitnessCenterIcon fontSize="large"/>Gimnasio</a> */}

            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                
              }}
            >
                {/* Puedo poner un href="./" después del buttomNav, o hacerlo con <a> pero me gusta mas asi...por el momento */}
              <BottomNavigationAction label="Gimnasio" icon={<FitnessCenterIcon fontSize="large"/>}/> 
              <BottomNavigationAction label="Tenis" icon={<SportsTennisIcon fontSize="large"/>} />
              <BottomNavigationAction label="Paddle" icon={<SportsBaseballTwoToneIcon fontSize="large"/>} />
              <BottomNavigationAction label="Futbol" icon={<SportsSoccerIcon fontSize="large"/>} />
              <BottomNavigationAction label="Running" icon={<RunCircleIcon fontSize="large"/>} />
              <BottomNavigationAction label="Tienda" icon={<AddBusinessIcon fontSize="large"/>} />
            </BottomNavigation>
            
          
        </nav>

      <div className="CartMenu">
          <CartWidget numeroCarrito={0}></CartWidget>
          <AccountMenu id="MenuCuenta"></AccountMenu>
      </div>
      
      </header>
        
      </>
    )}


export default Header