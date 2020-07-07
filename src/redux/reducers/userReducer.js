export default function userReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_USER":
            return [...state, { ...action.user }];
        case "DELETE_USER":
            const userName = action.name;
            return state.filter(user => user.name !== userName);
        default:
            return state;
    }
}