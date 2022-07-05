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

    const categorias = [{name: "Gimnasio", ruta: "/deporte/gimnasio", id: 1, icon: <BottomNavigationAction icon={<FitnessCenterIcon fontSize="large"/>}/>},
                        {name: "Tenis", ruta: "/deporte/tenis", id: 2, icon: <BottomNavigationAction icon={<SportsTennisIcon fontSize="large"/>} />},
                        {name: "Paddle", ruta: "/deporte/paddle", id: 3, icon:<BottomNavigationAction icon={<SportsBaseballTwoToneIcon fontSize="large"/>} /> },
                        {name: "Futbol", ruta: "/deporte/futbol", id: 4, icon: <BottomNavigationAction icon={<SportsSoccerIcon fontSize="large"/>} /> },
                        {name: "Running", ruta: "/deporte/running", id: 5, icon:<BottomNavigationAction icon={<RunCircleIcon fontSize="large"/>} />},
                        {name: "Tienda", ruta: "/tienda/general", id: 6, icon:<BottomNavigationAction icon={<AddBusinessIcon fontSize="large"/>} />}
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