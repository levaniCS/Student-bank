export interface AuthDataProps {
  status: {
    loggedIn: boolean,
    login: (v: Partial<RegisterDataProps>) => void,
    register: (v: RegisterDataProps) => void
    logout: () => void
  },
  user: {
    userDetails: {
      name: String
      isParent: boolean,
    },
    setUserDetails: () => void
  }
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