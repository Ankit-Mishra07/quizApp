import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({name, children}) => {

    if(!name) {
     return <Navigate to="/" />

    }


  return children
}

export default PrivateRoute