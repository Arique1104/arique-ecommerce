import {Fragment, useContext } from 'react'
import {Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown' 
import '../nav-bar/nav-bar.styles.scss'
import {UserContext} from '../../contexts/user.context'
import {CartContext} from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const NavBar = () => {
    
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>

           <div className="nav-bar">
            <Link className='logo-container' to='/'>
             <CrwnLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
        {
            currentUser ? (
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
               ) : (
               <Link className='nav-link' to='/auth'>
                      SIGN IN
                </Link>)
        }
       
            <CartIcon></CartIcon>
                          
            </div>
            {isCartOpen && <CartDropDown/>}
            </div> 
            <Outlet/>
        </Fragment>
        
    )
}

export default NavBar