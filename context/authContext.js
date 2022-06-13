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


    const addFieldToStudent = (studentId, fieldName, data, goalId = null) => {
        const curr = students.find(i => i.id === studentId)

        if(!goalId) {
            curr[fieldName] = curr[fieldName] ? [...curr[fieldName], {...data, id: generateId() }] : [{...data, id: generateId()}]
        } else {
            const goalIndex = curr[fieldName].findIndex(i => i.id === goalId)
            if(goalIndex !== -1) {
                curr[fieldName][goalIndex] = {...curr[fieldName][goalIndex], ...data}
            }
        }
        

        const idx = students.findIndex(i => i.id === studentId)
        let studentsClone = [...students]
        studentsClone[idx] = curr

        setStudents([...studentsClone])
    }

    const logout = () => {
        setLoggedIn(false);
        setUserDetails([]);
    }


    const deleteGoalToStudent = (studentId, goalId) => {
        const curr = students.find(i => i.id === studentId)
        if(curr) {
            let goals = [...curr.goals]
            goals = goals.filter(g => g.id !== goalId)
            curr['goals'] = goals
        }


        const idx = students.findIndex(i => i.id === studentId)
        let studentsClone = [...students]
        studentsClone[idx] = curr
        setStudents([...studentsClone])
    }

    const markGoalAsDoneToStudent = (studentId, goalId) => {
        const curr = students.find(i => i.id === studentId)
        if(curr) {
            let goals = [...curr.goals]
            const goalIdx = goals.findIndex(i => i.id === goalId)
            goals[goalIdx] = {...goals[goalIdx], isDone: true }
            curr['goals'] = goals

        }


        const idx = students.findIndex(i => i.id === studentId)
        let studentsClone = [...students]
        studentsClone[idx] = curr
        setStudents([...studentsClone])
        
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
            deleteGoalToStudent,
            markGoalAsDoneToStudent
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