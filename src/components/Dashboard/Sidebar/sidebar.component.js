import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.component.css';

export const Sidebar = (props) => {

   function toggle(){
    var x = document.getElementById("sidebar");
    if(x.style.display === 'none'){
        x.style.display = 'block';
       
    }else{
        x.style.display = "none";  
    }
   }

    let Admin = props.isNurseryAdmin
        ? <>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <Link to="/nurseryDashboard"><i className="fas fa-home"></i><span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nurseryDashboard/product"><i className="fas fa-shopping-cart"></i><span>Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nurseryDashboard/order"><i className="fa fa-cart-arrow-down"></i><span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nurseryDashboard/article"><i className="fas fa-newspaper"></i><span>Article</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
        : <>
            <div className="sidebar-menu">
           
                <ul>
                    <li>
                        <Link to="/dashboard"><i className="fas fa-home"></i><span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/user"><i className="fas fa-user"></i><span>User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/viewProduct"><i className="fas fa-shopping-cart"></i><span>Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/viewNursery"><i className="fas fa-hand-holding-seedling"></i><span>Nursery</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/setting"><i className="fas fa-cog"></i><span>Setting</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/order"><i className="fa fa-cart-arrow-down"></i><span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/viewArticle"><i className="fas fa-newspaper"></i><span>Articles</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>


    return (
        <>
        <button className="toggle-btn" onClick={toggle}><i className="fa fa-bars"></i></button>
        <div id="sidebar">
            {Admin}
        </div>
        </>
    )
}