import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}> Home </NavLink>
        <NavLink to='/create' activeClassName='is-active'>Expence Page</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
);

export default Header;