import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Reports from './components/Reports';
import Users from './components/Users';
import { Switch, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path={["/", "/Home"]} component={Home} />
                    <Route path="/Reports" component={Reports} />
                    <Route path="/Users" component={Users} />
                </Switch>
            </div>
        );
    }
}

export default App;