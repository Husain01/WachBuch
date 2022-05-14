import {createContext, useContext, useReducer, useEffect} from 'react';
import { authReducer } from '../../Reducers/Auth/AuthReducer';

const AuthContext = createContext();

const initialState = {
    user: "",
    token: ""
}

 const AuthProvider = ({children}) => {
    const [authState , authDispatch] = useReducer(authReducer, initialState);

    const checkUser = () => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        authDispatch({type: "CHECKUSER", payload: {user, token}})
    }

    useEffect(() => {
      checkUser();
    }, [])
    

  return (
    <AuthContext.Provider value={{authState, authDispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth};
