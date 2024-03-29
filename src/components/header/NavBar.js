import React from "react";
import "./Header.css";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import SportsBaseballTwoToneIcon from '@mui/icons-material/SportsBaseballTwoTone';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountMenu from "./MenuNav";
import CartWidget from "./CartWidget";
import { cartContext } from '../API/ListaDeProductos';
import { useContext } from 'react';
import { Link, NavLink} from "react-router-dom";






const NavBar = () =>{


    const {qty} = useContext(cartContext)


    const categorias = [{name: "Gimnasio", ruta: "/deporte/gimnasio", id: "Nav1", icon: <FitnessCenterIcon fontSize="large"/>},
                        {name: "Tenis", ruta: "/deporte/tenis", id: "Nav2", icon: <SportsTennisIcon fontSize="large" />},
                        {name: "Paddle", ruta: "/deporte/paddle", id: "Nav3", icon: <SportsBaseballTwoToneIcon fontSize="large" /> },
                        {name: "Futbol", ruta: "/deporte/futbol", id: "Nav4", icon: <SportsSoccerIcon fontSize="large" /> },
                        {name: "Running", ruta: "/deporte/running", id: "Nav5", icon:<RunCircleIcon fontSize="large"/>},
                        {name: "Tienda", ruta: "/tienda/general", id: "Nav6", icon:<AddBusinessIcon fontSize="large"/>}
                    ]




    return (
    <>
        <nav>
         
                
                     {categorias.map((categorias) => 
                        <NavLink key={categorias.id} style={StyleSheet.link} to={categorias.ruta}>{/* aca deberia ir cada cosa con su icono */}
                            
                            {categorias.icon}{categorias.name}
                        </NavLink>)}
            
                
                         
        </nav>
    
          <div className="CartMenu">
          <Link to="/tienda/cart"><CartWidget numeroCarrito={qty}></CartWidget></Link>
              <AccountMenu id="MenuCuenta"></AccountMenu>
          </div>
    </>
)}

export default NavBar