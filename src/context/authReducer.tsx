import { AuthState } from "./AuthContext"



type AuthAction =
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: 'changeFavoriteIcon', payload: string }
    | { type: 'changeUsername', payload: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {


    switch (action.type) {
        case 'signIn':
            return { ...state, isLoggedIn: true, username: 'no-username-yet' }

        case 'logout':
            return {
                isLoggedIn: false,
                username: null,
                favoriteIcon: null
            }
        case 'changeFavoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'changeUsername':

            return {
                ...state,
                username: action.payload
            }

        default:
            return state;
    }

}