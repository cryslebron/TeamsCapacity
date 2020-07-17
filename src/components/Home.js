import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from './Table';
import { Link } from 'react-router-dom';
import SprintDate from './sprintCap';
import NewEmployee from './NewEmployee'
import SprintTable from './SprintTable'

import "react-datepicker/dist/react-datepicker.css";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={isOpen:false}
    
    }
    toggleForm= () => {
        this.setState(
            {isOpen:!this.state.isOpen}
        )

    }

    toggleForms= () => {
        this.setState(
            {isOpen:!this.state.isOpen}
        )

    }
    render() {
        return (
            <div className="container">
                 <h1>Team Capacity </h1>
                <div>
                    <div className="container">
                     
                       <SprintTable/>
                       <button onClick={this.toggleForms}> Add new Sprint</button>
        {this.state.isOpen && <SprintDate /> }  
                        
                    </div>
                   
                </div>
                <div className="container center border-black">
                   
                    <h2>
                        <p>TEAM</p>
                    </h2>
                    <Table />
                    <div className="container">
                    <button onClick={this.toggleForm}> Add new Employee</button>
        {this.state.isOpen && <NewEmployee/> }    
                    
                </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Home);