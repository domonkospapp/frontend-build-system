import { ComponentChildren, h, VNode } from "preact";
import { IAuthContext, AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ComponentChildren,
  auth:IAuthContext
}

export const AuthProvider = ({children, auth}: AuthProviderProps):VNode<any> => (
  <AuthContext.Provider value={auth}>
    {children}
  </AuthContext.Provider>
)
