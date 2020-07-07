import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../redux/actions/userActions';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            user: {
                name: '',
                title: '',
                time: '',
                pto: ''
            }
        };

        this.state = this.initialState;
    }
//update state everytime that there is a change on any imput
    handleChange = event => {
        const { name, value } = event.target;
        const user = { ...this.state.user, [name]: value }

        this.setState({ user });
    }
//dispatch the Redux createUser action on submit
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(userActions.createUser(this.state.user))
        this.resetForm();
    }
//is to clear the form once submitted 
    resetForm = () => {
        const user = { ...this.state.user, name: "", title: "", time: "", pto: "" }

        this.setState({ user });
    }

    render() {
        const { user } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={this.handleChange} />
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={user.title}
                    onChange={this.handleChange} />
                <label htmlFor="time">Capacity per day</label>
                <input
                    type="number"
                    name="time"
                    id="time"
                    value={user.time}
                    onChange={this.handleChange} />
                <label htmlFor="pto">PTO/Holiday</label>
                <input
                    type="number"
                    name="pto"
                    id="pto"
                    value={user.pto}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Form);