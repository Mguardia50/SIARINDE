import React from "react";
import "./Header.css";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import SportsBaseballTwoToneIcon from '@mui/icons-material/SportsBaseballTwoTone';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountMenu from "./MenuNav";
import CartWidget from "./CartWidget";
import { Link, NavLink} from "react-router-dom";


const NavBar = () =>{

    const funcionClick = () => {
        setTimeout(()=>{
        window.location.reload();
      }, 500)
    
      };

    const categorias = [{name: "Gimnasio", ruta: "/deporte/gimnasio", id: "Nav1", icon: <FitnessCenterIcon fontSize="large"/>},
                        {name: "Tenis", ruta: "/deporte/tenis", id: "Nav2", icon: <SportsTennisIcon fontSize="large" />},
                        {name: "Paddle", ruta: "/deporte/paddle", id: "Nav3", icon: <SportsBaseballTwoToneIcon fontSize="large" /> },
                        {name: "Futbol", ruta: "/deporte/futbol", id: "Nav4", icon: <SportsSoccerIcon fontSize="large" /> },
                        {name: "Running", ruta: "/deporte/running", id: "Nav5", icon:<RunCircleIcon fontSize="large"/>},
                        {name: "Tienda", ruta: "/tienda/general", id: "Nav6", icon:<AddBusinessIcon fontSize="large" onClick={funcionClick}/>}
                    ]


    const [value, setValue] = React.useState(0);

    return (
    <>
        <nav>
         
                
                     {categorias.map((categorias) => 
                        <NavLink key={categorias.id} style={StyleSheet.link} to={categorias.ruta}>{/* aca deberia ir cada cosa con su icono */}
                            
                            {categorias.icon}{categorias.name}
                        </NavLink>)}
            
                 {/*  POR EL MOMENTO NO VOY A USAR ESTO, LO HARE CON STYLES
                    <BottomNavigation showLabels value={value} onChange={(event, newValue) => {setValue(newValue);}}>
                
                   <BottomNavigationAction label="Gimnasio" icon={<FitnessCenterIcon fontSize="large"/>}/>  
                  <BottomNavigationAction label="Tenis" icon={<SportsTennisIcon fontSize="large"/>} />  
                  <BottomNavigationAction label="Paddle" icon={<SportsBaseballTwoToneIcon fontSize="large"/>} /> 
                  <BottomNavigationAction label="Futbol" icon={<SportsSoccerIcon fontSize="large"/>} /> 
                  <BottomNavigationAction label="Running" icon={<RunCircleIcon fontSize="large"/>} /> 
                  <BottomNavigationAction label="Tienda" icon={<AddBusinessIcon fontSize="large"/>} />
                </BottomNavigation> */}

                {/* <Link to="/"></Link> */}
                
              
        </nav>
    
          <div className="CartMenu">
              <CartWidget numeroCarrito={0}></CartWidget>
              <AccountMenu id="MenuCuenta"></AccountMenu>
          </div>
    </>
)}

export default NavBar