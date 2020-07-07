import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar';
import Table from './Table';
import Form from './Form';
import SprintDate from './sprintCap'
import "react-datepicker/dist/react-datepicker.css";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container">
                        <SprintDate />
                    </div>
                    <div className="container">
                        <Calendar />
                    </div>
                </div>
                <div className="container center border-black">
                    <h1>Team Capacity </h1>
                    <h2>
                        <p>TEAM</p>
                    </h2>
                    <Table />
                    <h3>Add a New user</h3>
                    <Form />
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