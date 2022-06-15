export interface AuthDataProps {
  status: {
    loggedIn: Boolean;
    login: (v: Partial<RegisterDataProps>) => void;
    register: (v: RegisterDataProps) => void;
    logout: () => void;
  };
  students: {
    list: [RegisterDataProps];
    addStudent: (v: RegisterDataProps, parentId?: String) => void;
    addFieldToStudent: (
      studentId: String,
      fieldName: String,
      data: any,
      goalId?: String
    ) => void;
    deleteGoalToStudent: (studentId: String, goalId: String) => void;
    markGoalAsDoneToStudent: (studentId: String, goalId: String) => void;
  };
  user: {
    userDetails: RegisterDataProps & { isParent: boolean };
    setUserDetails: () => void;
  };
  balance: any;
}

export interface RegisterDataProps {
  id?: String;
  name: String;
  surname: String;
  email: String;
  password: String;
  passwordRepeat: String;
  goals?: Array<Goals>;
}

export interface LoginDataProps {
  name: String;
  password: String;
}

export interface Goals {
  id?: String;
  title: String;
  description: String;
  isDone?: boolean;
}
