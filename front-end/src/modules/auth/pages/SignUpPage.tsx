import { SignUp, useAuth } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'

const SignUpPage = () => {
  const { isSignedIn, isLoaded } = useAuth()

  // Show loading while checking auth state
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Redirect if already signed in
  if (isSignedIn) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Join SkillLink Today
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Create your account and start building amazing projects
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignUp 
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            forceRedirectUrl="/dashboard"
            appearance={{
              elements: {
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
                card: "shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden"
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage