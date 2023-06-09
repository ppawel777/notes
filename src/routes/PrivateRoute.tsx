import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from "../context/AuthProvider"

const PrivateRoute = ({ children }: any) => {
  const auth = useAuth();
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  if (auth && auth.user === null) return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  return children
}

export default PrivateRoute
