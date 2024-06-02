// Auth Context

import { createContext, useState, useContext } from "react";


const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState("light");

  const values = { user, setUser };

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  );
};


export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
