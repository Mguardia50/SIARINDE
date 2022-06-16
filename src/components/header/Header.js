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
import AccountMenu from "./MenuNav";

const Header = () =>{
    const [value, setValue] = React.useState(0);


    return(
    <>
    <header>
        <div>
            <div className="logoNav">
                <img src={Logo} alt="" />
                <h1>SIARINDE</h1>
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
            </BottomNavigation>
            
          
        </nav>

        <AccountMenu id="MenuCuenta"></AccountMenu>
    </header>
        
      </>
    )}


export default Header