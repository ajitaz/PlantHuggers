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
import { viewProduct } from './Dashboard/ViewProduct/viewProduct.component';
import { viewNursery } from './Dashboard/ViewNursery/viewNursery.component';
import { AddUser } from './Dashboard/AddUser/addUser.component';
import { addNursery } from './Dashboard/AddNursery/addNursery.component';
import { AddProduct } from './Dashboard/AddProduct/addProduct.component';
import { IndNursery } from './Pages/Ind_Nursery/indNursery.component';
import { IndCategory } from './Pages/IndCategory/indCategory.component';
import { setting } from './Dashboard/Setting/settng.component';
import { AddCategory } from './Dashboard/AddCategory/addCategory.component';


const NotFound = () => {
    return (
        <div>
            <img src="http://localhost:3000/images/PageNotFound.png" alt="Not Found" />
        </div>
    )
}

export const AppRouting = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/category/:name" component={IndCategory}></Route>
                <Route exact path="/shop" component={Shop}></Route>
                <Route exact path="/product/:name" component={Products}></Route>
                <Route exact path="/dashboard/addProduct" component={AddProduct}></Route>
                <Route exact path="/nursery" component={Nursery}></Route>
                <Route exact path="/nursery/:name" component={IndNursery}></Route>
                <Route exact path="/articles" component={Articles}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/dashboard/user" component={User}></Route>
                <Route exact path="/dashboard/viewProduct" component={viewProduct}></Route>
                <Route exact path="/dashboard/user/adduser" component={AddUser}></Route>
                <Route exact path="/dashboard/addNursery" component={addNursery}></Route>
                <Route exact path="/dashboard/viewNursery" component={viewNursery}></Route>
                <Route exact path="/dashboard/setting" component ={setting}></Route>
                <Route exact path="/dashboard/AddCategory" component ={AddCategory}></Route>

                <Route component={NotFound}></Route>
            </Switch>

        </BrowserRouter>
    )
}