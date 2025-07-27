import { Routes, Route } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react'
import HomePage from '../../modules/landing/pages/HomePage'
import SignInPage from '../../modules/auth/pages/SignInPage'
import SignUpPage from '../../modules/auth/pages/SignUpPage'
import DashboardPage from '../../modules/dashboard/pages/DashboardPage'
import ProtectedRoute from '../../modules/auth/components/ProtectedRoute'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
      
      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } 
      />
      
      {/* Add more protected routes here */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  )
}