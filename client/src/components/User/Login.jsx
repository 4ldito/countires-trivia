import { useAuth0 } from '@auth0/auth0-react'
import Button from './../Buttons/Button'

const Login = () => {
  const { loginWithPopup } = useAuth0()
  return (
    <Button onClick={loginWithPopup}>Log In</Button>
  )
}

export default Login
