import {Fragment} from 'react'
import {Outlet, Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <Fragment>

           <div className="nav-bar">
            <Link className='logo-container' to='/'>
            <div>Logo</div>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
            </div>
            </div> 
            <Outlet/>
        </Fragment>
        
    )
}

export default NavBar