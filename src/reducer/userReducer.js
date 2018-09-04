import { ToastAndroid } from "react-native";

const initialState = {
    username: 'admin',
    password: 'admin',
    loggedIn: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            if (state.username == action.userName && state.password == action.passWord){
                return {...state, loggedIn: !state.loggedIn }
            }
    
        default:
            return state
    }
}