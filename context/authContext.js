import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [userDetails, setUserDetails] = useState([]);
    const [students, setStudents] = useState([]);


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

    
    const addStudent = values => {
        console.log('students', students)
        const oldStudents = [...students]
        const newStudent = {...values, isParent: false}

        setStudents([
            ...oldStudents, newStudent
        ]);
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
        students: {
            addStudent,
            list: students
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