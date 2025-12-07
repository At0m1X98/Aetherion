import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import UserLayout from '../layout/UserLayout';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null; // or a spinner while checking localStorage

  if (!user) return <Navigate to="/login" replace />;

  return <UserLayout>{children}</UserLayout>;
};

export default ProtectedRoute;
