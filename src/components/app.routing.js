import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
import { IndArticle } from './Pages/Ind_Article/indArticle.component';
import { Setting } from './Dashboard/Setting/settng.component';
import { NavBar } from '../components/common/navbar/nav.component';
import { Footer } from '../components/common/footer/footer.component';
import { Sidebar } from './Dashboard/Sidebar/sidebar.component';
import { ViewOrder } from './Dashboard/ViewOrder/viewOrder.component';
import { Cart } from './Pages/Cart/cart.component';
import { DashNav } from './Dashboard/DashNav/dashNav.component';
import { NurseryArticle } from './Dashboard/NurseryDashboard/NurseryArticle/nurseryArticle.component';
import Reset from './Pages/ResetPassword/reset.component';
import { ViewArticle } from './Dashboard/ViewArticles/viewArticle.component';



const NotFound = () => {
    return (
        <div>
            <img src="http://localhost:3000/images/PageNotFound.png" alt="Not Found" />
        </div>
    )
}



const AdminRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={routeProps => (
        (localStorage.getItem('flag') === 'Admin')
            ? <>
                <Sidebar isNurseryAdmin={false}></Sidebar>
                <DashNav />
                <Component {...routeProps}></Component>
            </>
            : <Redirect to={{
                pathname: '/login',
                state: { fromRegister: false }
            }}></Redirect>


    )}></Route>
}

const PublicRoute = ({ component: Component, ...rest }) => {
    window.scrollTo(0, 0);

    return <Route {...rest} render={routeProps => (

        <>
            <NavBar isLoggedIn={localStorage.getItem('flag') ? true : false} />
            <Component {...routeProps}></Component>
            <Footer />
        </>

    )}></Route>
}

const NurseryAdminRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={routeProps => (
        (localStorage.getItem('flag') === 'NA' || localStorage.getItem('flag') === 'Admin')
            ? <>
                <Sidebar isNurseryAdmin={true}></Sidebar>
                <DashNav />
                <Component {...routeProps} isNurseryDashboard={true}></Component>
            </>
            : <Redirect to={{
                pathname: '/login',
                state: { fromRegister: false }
            }}></Redirect>

    )}></Route>
}

export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path="/" component={Home}></PublicRoute>
                <PublicRoute exact path="/category/:cid" component={IndCategory}></PublicRoute>
                <PublicRoute exact path="/shop" component={Shop}></PublicRoute>
                <PublicRoute exact path="/product" component={Products}></PublicRoute>
                <AdminRoute exact path="/dashboard/addProduct" component={AddProduct}></AdminRoute>
                <PublicRoute exact path="/category" component={CategoryPage}></PublicRoute>
                <PublicRoute exact path="/nursery" component={Nursery}></PublicRoute>
                <PublicRoute exact path="/nursery/:nid" component={IndNursery}></PublicRoute>
                <PublicRoute exact path="/articles" component={Articles}></PublicRoute>
                <PublicRoute exact path="/indArticle/:aid" component={IndArticle}></PublicRoute>
                <Route exact path="/login" component={Login}></Route>
                <AdminRoute exact path="/dashboard" component={Dashboard}></AdminRoute>
                <NurseryAdminRoute exact path="/NurseryDashboard" component={NurseryDashboard}></NurseryAdminRoute>
                <AdminRoute exact path="/dashboard/user" component={User}></AdminRoute>
                <AdminRoute exact path="/dashboard/viewProduct" component={viewProduct}></AdminRoute>
                <AdminRoute exact path="/dashboard/viewArticle" component={ViewArticle}></AdminRoute>
                <AdminRoute exact path="/dashboard/user/adduser" component={AddUser}></AdminRoute>
                <AdminRoute exact path="/dashboard/addNursery" component={AddNursery}></AdminRoute>
                <AdminRoute exact path="/dashboard/viewNursery" component={ViewNursery}></AdminRoute>
                <AdminRoute exact path="/dashboard/setting" component={Setting}></AdminRoute>
                <NurseryAdminRoute exact path="/nurseryDashboard/product" component={viewProduct}></NurseryAdminRoute>
                <NurseryAdminRoute exact path="/nurseryDashboard/order" component={ViewOrder}></NurseryAdminRoute>
                <NurseryAdminRoute exact path="/nurseryDashboard/addProduct" component={AddProduct}></NurseryAdminRoute>
                <PublicRoute exact path="/cart" component={Cart}></PublicRoute>
                <AdminRoute exact path="/dashboard/order" component={ViewOrder}></AdminRoute>
                <NurseryAdminRoute exact path="/nurseryDashboard/article" component={NurseryArticle}></NurseryAdminRoute>
                <NurseryAdminRoute exact path="/nurseryDashboard/setting" component={Setting}></NurseryAdminRoute>
                <NurseryAdminRoute exact path="/nurseryDashboard/viewArticle" component={ViewArticle}></NurseryAdminRoute>
                <Route exact path="/resetPassword/:uname" component={Reset}></Route>
                <PublicRoute component={NotFound}></PublicRoute>

            </Switch>

        </BrowserRouter>
    )
}
