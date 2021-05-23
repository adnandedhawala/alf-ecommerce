import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Auth } from '../helpers/auth';
import { roleConstants } from '../appRedux/constants';
import Login from '../pages/login';

// const AuthenticatedHomePage = Auth(HomePage, [roleConstants.USER_ROLE]);

const NotFoundRedirect = () => <Redirect to='/' />;

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch >
                    {/* <Route exact path='/' render={() => <Redirect to='/login' />} /> */}
                    <Route path='/' component={Login} />
                    <Route component={NotFoundRedirect} />
                </Switch>
            </Router>
        );
    }
}

export { AppRouter };
