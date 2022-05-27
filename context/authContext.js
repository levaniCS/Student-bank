import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [userDetails, setUserDetails] = useState([]);

    const login = values => {
        setLoggedIn(true);
        setUserDetails({
            ...values,
            isParent: true
        });
    }

    const register = values => {
        setLoggedIn(true);
        setUserDetails({
            ...values,
            isParent: true
        });
    }

    const logout = () => {
        setLoggedIn(false);
        setUserDetails([]);
    }

    const contextValue = {
        status: {
            loggedIn,
            login,
            logout,
            register
        },
        user: {
            userDetails,
            setUserDetails
        }
    };

    return (
        <AuthContext.Provider value={ contextValue }>
            { children }
        </AuthContext.Provider>
    );
};
export default AuthProvider;