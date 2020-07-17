import React from 'react';
import { connect } from 'react-redux';
import * as sprintActions from '../redux/actions/sprintActions';
import { bindActionCreators } from 'redux';

const SprintHeader = () => {
    return (
        <thead>
            <tr>
                <th>Sprint Number</th>
                <th>Start date</th>
                <th>End Date</th>
                <th>Sprint Length</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}
// Delete Sprint by name
function deleteSprint(actions, SprintName) {
    actions.deleteSprint(SprintName);
}

const SprintBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.SprintName}</td>
                <td>{row.SprintStart}</td>
                <td>{row.SprintEnd}</td>
                <td>{row.SprintLength}</td>
               <td><button onClick={() => deleteSprint(props.actions, row.SprintName)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { sprint } = props;
    return (
        <table>
            <SprintHeader />
            <SprintBody characterData={sprint} actions={props.actions} />
        </table>
    );
}

function mapStateToProps(state) {
    return {
        sprint: state.sprint
    }
}
//Since I have multiple subcomponents, I needed to add the binsActionCreator to call an action inside a subcomponent under Table.js
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sprintActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Table);
