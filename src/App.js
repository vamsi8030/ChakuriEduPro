import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import ManagementBar from './ManagementBar';
import Welcome from './Welcome';
import Footer from './Footer';
function App() {
    return(
        <div>
            <Router>
                <NavigationBar/>
                <ManagementBar/>
                <Switch>
                    <Route exact path={"/"} component={Welcome}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;
