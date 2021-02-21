import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Products } from './Pages/Products/products.component';
import { Home } from './Pages/Home/home.component';
import { Nursery } from '../components/Pages/Nursery/nursery.component';
import { Shop } from '../components/Pages/Shop/shop.component';
import { Articles } from './Pages/Articles/articles.component'
import { Login } from './Pages/Login/login.component';
import { Dashboard } from './Dashboard/Board/board.component';
import { User } from './Dashboard/User/user.component';
import { AddUser } from './Dashboard/AddUser/addUser.component';
import { IndNursery } from './Pages/Ind_Nursery/indNursery.component';
import { IndCategory } from './Pages/IndCategory/indCategory.component';
const NotFound = () => {
    return(
        <div>
            <img src="images/PageNotFound.png" alt="Not Found"></img>
        </div>
    )
}

export const AppRouting = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/category" component={IndCategory}></Route>
                <Route exact path="/shop" component={Shop}></Route>
                <Route exact path="/products" component={Products}></Route>
                <Route exact path="/nursery" component={Nursery}></Route>
                <Route exact path="/indnursery" component={IndNursery}></Route>
                <Route exact path="/articles" component={Articles}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/dashboard/user" component={User}></Route>
                <Route exact path="/dashboard/user/adduser" component={AddUser}></Route>
                <Route component={NotFound}></Route>
            </Switch>

        </BrowserRouter>
    )
}