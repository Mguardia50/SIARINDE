import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Link} from "react-router-dom";


export default function BasicMenu() {
 
  
  return (
    <div>
        <Link to="/tienda/Tenis"><MenuItem>TENIS</MenuItem></Link>
        <Link to="/tienda/Futbol"><MenuItem>FUTBOL</MenuItem></Link>
        <Link to="/tienda/Paddle"><MenuItem>PADDLE</MenuItem></Link>
        <Link to="/tienda/Ropa"><MenuItem>ROPA</MenuItem></Link>
        <Link to="/tienda/Zapatillas"><MenuItem>ZAPATILLAS</MenuItem></Link>
    </div>
  );
}