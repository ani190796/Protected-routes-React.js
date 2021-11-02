import React from 'react'
import {
    Redirect,
    Switch,
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import Home from './pages/Home';
import PrivateRoute, { ProtectedRoute, UnprotectedRoute } from "./components/PrivateRoute";
import Logout from './components/Logout';
import { HOME_PATH, LOGIN_PATH } from './components/RoutePath';

// export const hashHistory = createHashHistory();

function AppRouter() {
    return (
        <>
        <div className='container'>
               <Router>
                    <Switch>
                                    <UnprotectedRoute
                                        path='/'
                                        component={Home}
                                        loggedInPath={HOME_PATH}
                                        exact
                                    />
                                    <ProtectedRoute path='/home' exact component={Logout} />
                                    {/* <Route exact path ='/' component={Home}/>
                                    <Route exact path ='/home' component={Logout}/> */}
                                    <Redirect to='/' />
                            
                    </Switch>
             </Router>
         </div>
        </>
    )
}

export default AppRouter
