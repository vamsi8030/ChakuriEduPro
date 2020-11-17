import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ManagementBar from './components/ManagementBar';
import Welcome from './components/Welcome';
import CreateProject from './components/Welcome/Project/Project';
import Footer from './components/Footer';
function App() {
    return(
        <div>
            <Router>
                <NavigationBar/>
                <ManagementBar/>
                <Switch>
                    <Route exact path={"/"} component={Welcome}/>
                    <Route exact path={"/CreateProject"} component={CreateProject}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;
