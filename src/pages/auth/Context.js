import { createContext, useContext } from 'react';

const AuthContext = createContext(false);

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
export default AuthContext;
