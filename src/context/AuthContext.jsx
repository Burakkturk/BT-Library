// Auth Context

import { useEffect } from "react";
import { createContext, useState, useContext } from "react";


const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(sessionStorage.getItem("user") || false);


  useEffect(() => {
    sessionStorage.setItem("user", user)
  }, [user]);

  const values = { user, setUser };

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  );
};


export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
