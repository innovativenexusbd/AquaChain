import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </>
    );
};

export default App;
