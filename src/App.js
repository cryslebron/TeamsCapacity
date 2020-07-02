import React, { Component } from 'react';
import NavBar from './Navbar';
import Features from './Features';
import Table from './Table';
import Form from './Form';
import SprintDate from './sprintCap'
import DatePicker from './DatePicker';
import "react-datepicker/dist/react-datepicker.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  

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
        const styles = {
            fontFamily: "sans-serif",
            textAlign: "center"
          };
          
          return (
           
       
            <div>
                 <div className="App">
        <Router>
        <NavBar />
         <Switch>
           <Route path="/features" component={Features}>
              <Features />
          </Route>
          </Switch>
            </Router>
            </div>
            <div >
            <div className="container">
                <SprintDate />
             </div>
             </div>
          
          <div className="container">
            <div style={styles}>
            <DatePicker/>
            </div>
            </div>
            {/* <form>
            <label>
    Sprint Duration:
    <input type="number" name="Duration" />
  </label>
  <input type="submit" value="Submit" />
</form> */}
            <div> 
            <div className="container">
                
              
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
            
            </div>
           
        );
    }
}


export default App;