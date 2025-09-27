import React from 'react'
import useAuthStore from '../store/auth'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
    const token = useAuthStore((state) => state.token)

    if (!token) return <Navigate to="/signin" />
    return children;
}

export default ProtectedRoute