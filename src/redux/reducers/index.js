import {combineReducers} from 'redux';
import users from './userReducer';
import sprint from './sprintReducer';

const rootReducer = combineReducers({
    users,
    sprint
});

export default rootReducer;