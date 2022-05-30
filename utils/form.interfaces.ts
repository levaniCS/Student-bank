export interface AuthDataProps {
  status: {
    loggedIn: boolean;
    login: (v: Partial<RegisterDataProps>) => void;
    register: (v: RegisterDataProps) => void;
    logout: () => void;
  };
  students: {
    list: [RegisterDataProps];
    addStudent: (v: RegisterDataProps) => void;
  };
  user: {
    userDetails: {
      name: String;
      isParent: boolean;
    };
    setUserDetails: () => void;
  };
}

export interface RegisterDataProps {
  name: String;
  surname: String;
  email: String;
  password: String;
  passwordRepeat: String;
}

export interface LoginDataProps {
  name: String;
  password: String;
}

export interface NavProps {
  setActiveNav: (str: string) => void;
  activeNav?: string;
}

export interface AuthAndNavProps extends AuthDataProps, NavProps {}
