import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import SideBar from './components/sideBar'
import { ToastContainer } from 'react-toastify';
import AdminLogin from './components/login/adminLogin'
import HomePage from './containers/homepage'
import Login from './components/login/login'
import Error from './error'
import Upload from './components/upload/upload'
import Contact from './components/contact'
import AllPhotos from './components/allPhotos'
import uploadPhotos from '../src/components/adminPannel/uploadPhotos'
import UserProfiles from '../src/components/adminPannel/profiles/userProfiles'
import Main from '../src/components/adminPannel/container/main'
function App() {

    let { path } = useRouteMatch();
    return (
        <>


            {/* <Navbar /> */}
            <ToastContainer />
            <Switch>
                <Route exact path={`${path}`} component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/acc/ad_min/login" component={Login} />
                <Route path="/uplad/upload-photos" component={Upload} />
                <Route path="/contact" component={Contact} />
                <Route path="/acc/ad_min/dashboard/adminlogin" component={AdminLogin} />
                <Route path="/acc/ad_min/dashboard/Main" component={Main} />
                <Route path="/acc/ad_min/dashboard/Dashboard/uploadPhotos" component={uploadPhotos} />
                <Route path="/acc/ad_min/dashboard/Dashboard/UserProfiles" component={UserProfiles} />
                <Route path={`${path}`} component={AllPhotos} />
                )} />
                    <Route component={Error} />
            </Switch>
            {/* <Footer /> */}

        </>

    )

}

export default App

