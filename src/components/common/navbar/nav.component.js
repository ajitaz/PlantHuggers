import React from 'react';
import { Link } from 'react-router-dom';
import './nav.component.css';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import { connect } from 'react-redux';
import { add_to_cart_ac, fetch_orderCount_ac } from './../../../Actions/Order/order.action';


const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);


const NavBarComponent = (props) => {

    function clearLocalStorage() {
        localStorage.clear();
    }

    if (props.isLoggedIn) {
        props.fetch();
    }

    let userLogged = props.isLoggedIn
        ? <ul>
            <li><Link to="./cart">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={props.count} color="secondary">
                        <ShoppingCartSharpIcon style={{ color: 'black' }} />
                    </StyledBadge>
                </IconButton>
            </Link></li>

            <li><Link to=""><i className="fas fa-user"> {`${localStorage.getItem('uname')}`}</i></Link></li>
            <li><Link to=""><i className="fas fa-sign-out-alt" onClick={() => { clearLocalStorage() }}></i></Link></li>
        </ul>
        : <ul>
            <li><Link to={{
                pathname: '/login',
                search: '',
                state: { fromRegister: false }
            }} className="login-btn">Login</Link></li>
        </ul>


    return (
        <div className="navbar">
            <div className="logo">
                <img src="http://localhost:3000/images/planthuggers.png" alt="Logo" width="80"></img>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/nursery">Nursery</Link></li>
                    <li><Link to="/category">Category</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                </ul>
            </nav>
            <div className="nav-details">
                {userLogged}
            </div>
        </div>
    )
}

const mapStateToProps = (rootStore) => {
    return {
        count: rootStore.order.orderCount,
        cart: rootStore.order.cart
    }
}

const mapDispatchToProps = dispatch => ({
    fetch: () => { dispatch(fetch_orderCount_ac()) },
    add: () => { dispatch(add_to_cart_ac()) }
})

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)