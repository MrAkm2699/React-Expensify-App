import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';
import HelpPage from '../components/Help';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;