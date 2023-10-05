import { Navigate, Outlet } from 'react-router-dom';


export default function App(props: any) {
  console.log(props);
  return (
    <h1 className="text-3xl font-bold underline">
      <Outlet />
      <Navigate to="/dashboard" />
    </h1>
  )
}