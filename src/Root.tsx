import { Navigate, Outlet } from 'react-router-dom';


export const Root = () => {
  
  return (
    <main>
      <Outlet />
      <Navigate to="/dashboard" />
    </main>
  )
}