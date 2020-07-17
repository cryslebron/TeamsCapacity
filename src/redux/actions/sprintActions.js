export function createSprint(sprint) {
    return { type: "CREATE_SPRINT", sprint };
}

export function deleteSprint(SprintName) {
    return { type: "DELETE_SPRINT", SprintName };
}