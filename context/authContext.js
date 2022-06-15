import { useState, createContext } from "react";
export const AuthContext = createContext();

export const generateId = () => (Math.random() + 1).toString(36).substring(7);
const goals = [
  {
    id: 1,
    title: "ელექტრო გადასახადი",
    time: "შეტანის ბოლო დღე 12 ივნისი",
    price: 40,
    status: false,
  },
  {
    id: 2,
    title: "ინტერნეტის გადასახადი",
    time: "შეტანის ბოლო დღე 18 ივლისი",
    price: 20,
    status: false,
  },
  {
    id: 3,
    title: "წყლის გადასახადი",
    time: "შეტანის ბოლო დღე 20 ივლისი",
    price: 35,
    status: false,
  },
];
const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [students, setStudents] = useState([]);
  const [monthlyGolas, setMonthlyGolas] = useState(goals);
  const [balance, setBalance] = useState(3200);
  const [balanceUSD, setBalanceUSD] = useState(0);
  const [balanceEURO, setBalanceEURO] = useState(0);
  const [balanceGBR, setBalanceGBR] = useState(0);
  const [balancePending, setBalancePending] = useState(130);

  const login = (values) => {
    setLoggedIn(true);
    setUserDetails({
      ...values,
      isParent: true,
    });
  };

  const changeBalance = (val, type) => {
    const oldBalance = balance;
    if (type === "add") {
      setBalance(oldBalance + val);
    }
    if (type === "dec") {
      setBalance(oldBalance - val);
    }
  };
  const changePandingBalance = (val) => {
    setBalancePending(val + balancePending);
  };

  const byUSD = (val) => {
    const gelFee = val * 3;

    if (gelFee < balance) {
      setBalance(balance - gelFee);
      setBalanceUSD(val);
    }
  };

  const byEURO = (val) => {
    const gelFee = val * 3.4;

    if (gelFee < balance) {
      setBalance(balance - gelFee);
      setBalanceEURO(val);
    }
  };

  const changeGoals = (id, type) => {
    const oldGoals = [...monthlyGolas];
    const newArr = oldGoals.map((obj, i) => {
      if (obj.id === id) {
        return { ...obj, status: true };
      }

      return obj;
    });
    setMonthlyGolas(newArr);
  };

  const register = (values) => {
    setLoggedIn(true);
    const data = { ...values, isParent: true, id: generateId() };
    setUserDetails(data);
  };

  const addStudent = (values, parentId) => {
    const oldStudents = [...students];
    const data = { ...values, isParent: false, parentId, id: generateId() };
    setStudents([...oldStudents, data]);
  };

  const addFieldToStudent = (studentId, fieldName, data, goalId = null) => {
    const curr = students.find((i) => i.id === studentId);

    if (!goalId) {
      curr[fieldName] = curr[fieldName]
        ? [...curr[fieldName], { ...data, id: generateId() }]
        : [{ ...data, id: generateId() }];
    } else {
      const goalIndex = curr[fieldName].findIndex((i) => i.id === goalId);
      if (goalIndex !== -1) {
        curr[fieldName][goalIndex] = { ...curr[fieldName][goalIndex], ...data };
      }
    }

    const idx = students.findIndex((i) => i.id === studentId);
    let studentsClone = [...students];
    studentsClone[idx] = curr;

    setStudents([...studentsClone]);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserDetails([]);
  };

  const deleteGoalToStudent = (studentId, goalId) => {
    const curr = students.find((i) => i.id === studentId);
    if (curr) {
      let goals = [...curr.goals];
      goals = goals.filter((g) => g.id !== goalId);
      curr["goals"] = goals;
    }

    const idx = students.findIndex((i) => i.id === studentId);
    let studentsClone = [...students];
    studentsClone[idx] = curr;
    setStudents([...studentsClone]);
  };

  const markGoalAsDoneToStudent = (studentId, goalId) => {
    const curr = students.find((i) => i.id === studentId);
    if (curr) {
      let goals = [...curr.goals];
      const goalIdx = goals.findIndex((i) => i.id === goalId);
      goals[goalIdx] = { ...goals[goalIdx], isDone: true };
      curr["goals"] = goals;
    }

    const idx = students.findIndex((i) => i.id === studentId);
    let studentsClone = [...students];
    studentsClone[idx] = curr;
    setStudents([...studentsClone]);
  };

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
      markGoalAsDoneToStudent,
    },
    user: {
      userDetails,
      setUserDetails,
    },
    balance: {
      changeBalance,
      balanceUSD: balanceUSD,
      balanceEURO: balanceEURO,
      balanceGBR: balanceGBR,
      balance: balance,
      balancePending: balancePending,
      changePandingBalance,
      byUSD,
      byEURO,
    },
    goals: {
      goals: monthlyGolas,
      changeGoals,
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
