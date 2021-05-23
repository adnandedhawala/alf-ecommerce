import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ProductCategory } from '../pages/product-category';
import { SingleProduct } from '../pages/single-product';
import { ProductCart } from '../pages/product-cart';


const NotFoundRedirect = () => <Redirect to='/' />;

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch >
                    <Route exact path='/' render={() => <Redirect to='/product-category' />} />
                    <Route exact path='/product-category' component={ProductCategory} />
                    <Route exact path='/product-category/:category' component={ProductCategory} />
                    <Route path='/cart' component={ProductCart} />
                    <Route path='/product/:id' component={SingleProduct} />
                    <Route component={NotFoundRedirect} />
                </Switch>
            </Router>
        );
    }
}

export { AppRouter };
