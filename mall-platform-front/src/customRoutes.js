import * as React from 'react';
import {Route} from 'react-router-dom';
import {Profile} from './modules/profile';

export default [
    <Route exact key={'profile'} path="/profile" component={Profile}/>
];
