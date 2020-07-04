import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Reports from './components/Reports';
import Users from './components/Users';
import Table from './components/Table';
import Form from './components/Form';
import SprintDate from './components/sprintCap'
// import DatePicker from './DatePicker';
import "react-datepicker/dist/react-datepicker.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Calendar from './components/Calendar';

  

  class App extends Component {

    
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    
    render() {
      
        const { characters } = this.state;
        
          return (
           
       
            <div>
                 <div className="App">
        <Router>
        <NavBar />
         <Switch>
         
           <Route path="/components/Reports" component={Reports}/>
           <Route path="/components/Users" component={Users}/>
          
          
          
          </Switch>
            </Router>
            </div>
           
           <div>
                <div className="container">
                <SprintDate />
             </div>
       
                  
             <div className="container">
         
            <Calendar/>
            </div>
            </div>
    
         
            <div className="container center border-black">
                
              
                <h1>Team Capacity </h1>
                <h2>
                <p>TEAM</p>
                </h2>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add a New user</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
            </div>
            
         
           
        );
    }
}


export default App;