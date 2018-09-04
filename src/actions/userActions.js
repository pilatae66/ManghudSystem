export const loginUser = (username, password) => {
    return {
        type: 'LOGIN',
        userName:username,
        passWord:password
    }
}