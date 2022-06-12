import { useState, createContext } from "react";
export const AuthContext = createContext();

export const generateId = () => (Math.random() + 1).toString(36).substring(7)

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
        const data = { ...values, isParent: true, id: generateId() }
        setUserDetails(data);
    }

    
    const addStudent = (values, parentId) => {
        const oldStudents = [...students]
        const data = {...values, isParent: false, parentId, id: generateId() }
        setStudents([...oldStudents, data]);
    }


    const addFieldToStudent = (studentId, fieldName, data) => {
        const curr = students.find(i => i.id === studentId)
        curr[fieldName] = curr[fieldName] ? [...curr[fieldName], data] : [data]

        const idx = students.findIndex(i => i.id === studentId)
        let studentsClone = [...students]
        studentsClone[idx] = curr

        setStudents([...studentsClone])
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
            register,
        },
        students: {
            addStudent,
            addFieldToStudent,
            list: students,
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