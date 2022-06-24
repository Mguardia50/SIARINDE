import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import react, {Component} from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default class CartWidget extends Component {
    render(){
        return(
            <>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <ShoppingCartIcon color="success" fontSize="large"></ShoppingCartIcon>
                </IconButton>
            </>
        )
    }
    
}
