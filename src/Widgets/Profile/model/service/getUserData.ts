import { useLazyQuery } from "@apollo/client";
import { GET_USER_DATA } from "../../../../Shared/config/users";


export const getUser = (userId: string | undefined) =>{
    return useLazyQuery(GET_USER_DATA, {
        variables: {
          id: userId,
        },
      });

}