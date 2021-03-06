import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Login } />
                <Route path="/home" component={ Home } />
            </Switch>
        </BrowserRouter>
    )


}