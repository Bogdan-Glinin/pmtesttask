import { useLazyQuery } from "@apollo/client";
import { AUTH_USER } from "../../../../Shared/config/users";


export const authSomeUser = (login: string, password: string) =>{
    return useLazyQuery(AUTH_USER, {
        variables: {
          login,
          password,
        },
      });
    
}

