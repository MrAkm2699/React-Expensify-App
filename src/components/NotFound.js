import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';


const NotFoundPage = () => (
    <div>
        <h1>Error: 404 page not found </h1>
        <Link to='/'>Home</Link>
    </div>
);


export default NotFoundPage;