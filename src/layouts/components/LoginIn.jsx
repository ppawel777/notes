import { Button } from '@mantine/core';
import { useAuth } from "../../context/AuthProvider"
import { useNavigate } from 'react-router-dom';

const LoginIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleRedirect = () => navigate('login')
  if (auth.user === null) {
    return (
      <Button onClick={ handleRedirect } color="violet" radius="md" uppercase>
        Войти
      </Button>
    )
  }

  return null
  // return (
  //   <>
  //     <span>{ auth.user }</span>
  //   </>
  // )
}

export default LoginIn;