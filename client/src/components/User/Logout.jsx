import { useAuth0 } from '@auth0/auth0-react'
import Button from './../Buttons/Button'

const Logout = () => {
  const { logout } = useAuth0()

  return (
    <Button onClick={logout} text='Log Out'>Log Out</Button>
  )
}

export default Logout
