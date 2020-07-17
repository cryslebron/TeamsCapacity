import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Reports from './components/Reports';
import Users from './components/Users';
import FooterPage from './components/Footer';
import LogIn from './components/LogIn';
import { Switch, Route } from "react-router-dom";




class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path={["/", "/LogIn"]} component={LogIn} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Reports" component={Reports} />
                    <Route path="/Users" component={Users} />
                    <Route path="/LogIn" component={LogIn} />
                    {/* <Route path="/NewEmployee" component={NewEmployee} /> */}
                </Switch>
                <FooterPage />
            
            </div>
        );
    }
}

export default App;
