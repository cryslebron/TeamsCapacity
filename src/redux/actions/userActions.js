export function createUser(user) {
    return { type: "CREATE_USER", user };
}

export function deleteUser(name) {
    return { type: "DELETE_USER", name };
}
//2 redux actions 


