import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import react, {Component} from 'react';

export default class CartWidget extends Component {
    render(){
        return(
            <ShoppingCartIcon color="success" fontSize="large"></ShoppingCartIcon>
        )
    }
    
}
