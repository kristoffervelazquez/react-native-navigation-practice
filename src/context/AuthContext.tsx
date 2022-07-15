import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';


// Definir como luce o que información tendré aquí

export interface AuthState {
    isLoggedIn: boolean;
    username: string | null;
    favoriteIcon: string | null;
}


/// Estado inicial 
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: null,
    favoriteIcon: null
}

// Interfaz que usaremos para recile a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (name: string) => void
}


// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)


// Componente proveedor del estado

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavoriteIcon', payload: iconName })
    }


    const changeUsername = (name: string) => {
        dispatch({ type: 'changeUsername', payload: name })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}
