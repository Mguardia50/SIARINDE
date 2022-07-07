import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink} from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    window.location.reload();
  };
  const funcionClick = () => {
    setTimeout(()=>{
      setAnchorEl(null);
    window.location.reload();
  }, 500)

  };

  
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <h4>CATEGORIA</h4>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to="/tienda/Tenis"><MenuItem onClick={funcionClick}>TENIS</MenuItem></Link>
        <Link to="/tienda/Futbol"><MenuItem  onClick={funcionClick}>FUTBOL</MenuItem></Link>
        <Link to="/tienda/Paddle"><MenuItem onClick={funcionClick}>PADDLE</MenuItem></Link>
        <Link to="/tienda/Ropa"><MenuItem onClick={funcionClick}>ROPA</MenuItem></Link>
        <Link to="/tienda/Zapatillas"><MenuItem  onClick={funcionClick}>ZAPATILLAS</MenuItem></Link>
      </Menu>
    </div>
  );
}