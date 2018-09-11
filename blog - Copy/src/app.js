import React from 'react';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarContainer from './navbar/containers/navbarContainer';

const App = (props) => (
    <Router>
        <React.Fragment>
            <NavbarContainer/>
            <AppRoutes/>   
        </React.Fragment>
    </Router>
)


export default App;