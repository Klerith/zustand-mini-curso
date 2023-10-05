import { SideMenu } from '../components';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex flex-row relative w-screen">
        <SideMenu />

        <Outlet />

      </div>
      
    </div>
  );
};