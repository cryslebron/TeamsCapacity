export default function sprintReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_SPRINT":
            return [...state, { ...action.sprint }];
        case "DELETE_SPRINT":
            const sprintName = action.SprintName;
            return state.filter(sprint => sprint.SprintName !== sprintName);
        default:
            return state;
    }
}