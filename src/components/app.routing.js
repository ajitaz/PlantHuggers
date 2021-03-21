import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Products } from './Pages/Products/products.component';
import { Home } from './Pages/Home/home.component';
import { Nursery } from '../components/Pages/Nursery/nursery.component';
import { Shop } from '../components/Pages/Shop/shop.component';
import { Articles } from './Pages/Articles/articles.component'
import { Login } from './Pages/Login/login.component';
import { Dashboard } from './Dashboard/Board/board.component';
import { NurseryDashboard } from './Dashboard/NurseryDashboard/nurseryDashboard.component';
import { User } from './Dashboard/User/user.component';
import { viewProduct } from './Dashboard/ViewProduct/viewProduct.component';
import { ViewNursery } from './Dashboard/ViewNursery/viewNursery.component';
import { AddUser } from './Dashboard/AddUser/addUser.component';
import { AddNursery } from './Dashboard/AddNursery/addNursery.component';
import { AddProduct } from './Dashboard/AddProduct/addProduct.component';
import { IndNursery } from './Pages/Ind_Nursery/indNursery.component';
import { CategoryPage } from './Pages/Category/categoryPage.component';
import { IndCategory } from './Pages/IndCategory/indCategory.component';
import { IndArticle, Ind_Article } from './Pages/Ind_Article/indArticle.component';
import { Setting } from './Dashboard/Setting/settng.component';




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
                <Route exact path="/product/:pid" component={Products}></Route>
                <Route exact path="/dashboard/addProduct" component={AddProduct}></Route>
                <Route exact path="/category" component={CategoryPage}></Route>
                <Route exact path="/nursery" component={Nursery}></Route>
                <Route exact path="/nursery/:name" component={IndNursery}></Route>
                <Route exact path="/articles" component={Articles}></Route>
                <Route exact path="/indArticle" component={IndArticle}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/NurseryDashboard" component={NurseryDashboard}></Route>
                <Route exact path="/dashboard/user" component={User}></Route>
                <Route exact path="/dashboard/viewProduct" component={viewProduct}></Route>
                <Route exact path="/dashboard/user/adduser" component={AddUser}></Route>
                <Route exact path="/dashboard/addNursery" component={AddNursery}></Route>
                <Route exact path="/dashboard/viewNursery" component={ViewNursery}></Route>
                <Route exact path="/dashboard/setting" component={Setting}></Route>
                <Route component={NotFound}></Route>
            </Switch>

        </BrowserRouter>
    )
}