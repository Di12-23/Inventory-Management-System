import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import ItemScreen from './pages/ItemScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import OrderScreen from './pages/OrderScreen';
import DashboardScreen from './pages/DashboardScreen'; // Import the new DashboardScreen

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/item/:id' component={ItemScreen} />
                    <Route path='/orders' component={OrderScreen} />
                    <Route path='/dashboard' component={DashboardScreen} /> {/* Add the Dashboard route */}
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;


