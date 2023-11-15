import React, { useReducer, createContext} from 'react';
import jwtDecode from 'jwt-decode';

const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

const initialState = {
    user: null
};

if (localStorage.getItem('jwtToken')) {
    const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
    
    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('jwtToken');
    } else {
        initialState.user = decodedToken;
    }
}

const authReducer = (state, action)  => {
    switch(action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case ACTIONS.LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}

export const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
});


export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (userData) => {
        localStorage.setItem('jwtToken', userData.token);
        dispatch({
            type: ACTIONS.LOGIN,
            payload: userData
        });
    }

    const logout = () => {
        localStorage.removeItem('jwtToken');
        dispatch({ type: ACTIONS.LOGOUT });
    }

    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout }}
            {...props}
        />
    ) 
}