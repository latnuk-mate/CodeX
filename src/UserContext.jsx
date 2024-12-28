import axios from "axios";
import {createContext, useEffect, useState } from "react";
import Loader from "./partials/Loader";


export const ContextUser = createContext({});

function UserContext({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false)

    useEffect(function(){
        axios.get('/user')
        .then(response => {
          setUser(response.data.user)
          setReady(true)
        })
        .catch(err => console.log(err))
    }, [])


    if(!ready){
      return <Loader />
    }
    
  return (
    <ContextUser.Provider value={{user, setUser}}>
        {children}
    </ContextUser.Provider>
  )
}

export default UserContext;