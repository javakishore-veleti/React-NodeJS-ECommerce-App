import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AuthRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        !(localStorage.getItem("piplelinestoken") && localStorage.getItem("piplelinesuser"))
            ? 
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Component {...props} />
                </div>
            </div>
            : <Redirect to='/' />
    )} />
);

export default AuthRoutes;