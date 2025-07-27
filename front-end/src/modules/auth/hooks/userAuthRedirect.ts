import { useAuth } from '@clerk/clerk-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
  const { isSignedIn, isLoaded } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!isLoaded) return

    const from = (location.state as any)?.from?.pathname || '/dashboard'

    if (isSignedIn && (location.pathname === '/sign-in' || location.pathname === '/sign-up')) {
      navigate(from, { replace: true })
    }
  }, [isSignedIn, isLoaded, navigate, location])

  return { isSignedIn, isLoaded }
}