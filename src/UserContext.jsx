import {createContext, useState } from "react";


export const ContextUser = createContext({});

function UserContext({children}) {
    const [user, setUser] = useState(null);


  return (
    <ContextUser.Provider value={{user, setUser}}>
        {children}
    </ContextUser.Provider>
  )
}

export default UserContext;