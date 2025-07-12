import React from 'react'
import useAuthStore from '../store/auth'

function ProtectedRoute(children) {
    const token = useAuthStore((state)=> state.token)
    if(!token) return <Navigate to = "/singin" />
    return children;
}

export default ProtectedRoute