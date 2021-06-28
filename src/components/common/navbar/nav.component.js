import React from 'react';
import { Link } from 'react-router-dom';
import './nav.component.css';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import { connect } from 'react-redux';
import { clear_fresh_cart_ac, fetch_orderCount_ac } from './../../../Actions/Order/order.action';
import Popup from 'reactjs-popup';
import Search from '../Search/search.component';

const REACT_URL = process.env.REACT_APP_REACT_URL;


const imgScr = `${REACT_URL}/images/planthuggers.png`;

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);


function togglenav() {
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



const NavBarComponent = (props) => {

    function clearLocalStorage() {
        localStorage.clear();
        props.clearFreshCart();
    }

    if (props.isLoggedIn) {
        props.fetchOrderCount();
    }

    let userLogged = props.isLoggedIn
        ? <>
            <Popup trigger={<i className="fas fa-search" style={{ cursor: 'pointer' }}> </i>} contentStyle={{ width: "700px", height: 'auto', overflow: 'hidden' }} modal>
                {close => (
                    <div className="modal">
                        <Search close={close} />
                    </div>
                )}
            </Popup>
            <Link to="/cart">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={(props.count + props.freshCartCount)} color="secondary">
                        <ShoppingCartSharpIcon style={{ color: 'black' }} />
                    </StyledBadge>
                </IconButton>
            </Link>

            <Link to="" style={{ fontSize: '18px' }}><i className="fas fa-user"> {`${localStorage.getItem('uname')}`}</i></Link>
            <Link to="" style={{ fontSize: '18px' }}><i className="fas fa-sign-out-alt" onClick={() => { clearLocalStorage() }}></i></Link>
        </>
        : <>
            <Popup trigger={<i className="fas fa-search" style={{ cursor: 'pointer' }}> </i>} contentStyle={{ width: "700px", height: 'auto', overflow: 'hidden' }} modal>
                {close => (
                    <div className="modal">
                        <Search close={close} />
                    </div>
                )}
            </Popup>
            <Link to={{
                pathname: '/login',
                search: '',
                state: { fromRegister: false }
            }} className="login-btn">Login</Link>
        </>


    return (
        <header>
            <img src={imgScr} alt="Logo" width="80"></img>
            <nav className="navbar">
                <Link to="/" onClick={togglenav}>Home</Link>
                <Link to="/shop" onClick={togglenav}>Shop</Link>
                <Link to="/nursery" onClick={togglenav}>Nursery</Link>
                <Link to="/category" onClick={togglenav}>Category</Link>
                <Link to="/articles" onClick={togglenav}>Articles</Link>
            </nav>
            <div className="nav-details">
                {userLogged}
            </div>
            <div id="menu-bar" className="fas fa-bars" onClick={togglenav}></div>

        </header>
    )
}

const mapStateToProps = (rootStore) => {
    return {
        count: rootStore.order.orderCount,
        freshCartCount: rootStore.order.freshCart.length
    }
}

const mapDispatchToProps = dispatch => ({
    fetchOrderCount: () => { dispatch(fetch_orderCount_ac()) },
    clearFreshCart: () => { dispatch(clear_fresh_cart_ac()) },
})

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)