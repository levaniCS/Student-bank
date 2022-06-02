export interface AuthDataProps {
  status: {
    loggedIn: Boolean,
    login: (v: Partial<RegisterDataProps>) => void,
    register: (v: RegisterDataProps) => void
    logout: () => void
  },
  students: {
    list: [RegisterDataProps & { isParent: boolean }],
    addStudent: (v: RegisterDataProps, parentId: String) => void
    addFieldToStudent: (studentId: String, fieldName: String, data: any) => void
  },
  user: {
    userDetails: RegisterDataProps & { isParent: boolean },
    setUserDetails: () => void
  }
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

export interface NavProps {
  setActiveNav: (str: String) => void
  activeNav?: String
}

export interface Goals {
  title: String;
  description: String;
}

export interface AuthAndNavProps extends AuthDataProps, NavProps {}