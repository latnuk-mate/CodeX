import React, { useContext } from 'react'
import { ContextUser } from '../UserContext'
import { Navigate } from 'react-router-dom'

function PrivateRoute({element}) {
    const {user} = useContext(ContextUser)
  return (
    <div>
        {
            (!user) ?
            <Navigate to={'/user/login'} replace={true} />
            :
            element
        }
    </div>
  )
}

export default PrivateRoute;