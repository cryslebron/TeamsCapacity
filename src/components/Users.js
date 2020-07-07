import React from 'react';
import { connect } from 'react-redux';

const Users = (props) => {
    const { users } = props;
    return (
        <div className="container">
            <h1>Users List</h1>
            {users.map(user => (
                <div key={user.name}>{user.name}</div>
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Users);