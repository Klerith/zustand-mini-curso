import type { IconType } from 'react-icons';
import { IoSpeedometerOutline, IoPawOutline, IoLogOutOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';


interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  icon: IconType;
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', subTitle: 'Visualizar data', href: '/dashboard', icon: IoSpeedometerOutline },
  { title: 'Osos', subTitle: 'Manejador de osos', href: '/dashboard/bears', icon: IoPawOutline },
];




export const SideMenu = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll mr-2">
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Zustand
          <span className="text-blue-500 text-xs"> StateManager</span>
          .
        </h1>
        <p className="text-slate-500 text-sm">Manejador de estados simple pero poderoso.</p>
      </div>

      {/*  Profile */ }
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <img className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="" />
          </span>
          <span className="text-sm md:text-base font-bold">
            Edward Tompson
          </span>
        </a>
      </div>

      {/* Menu Items */ }
      <nav id="nav" className="w-full px-6">

        {
          menuItems.map( item => (
            <NavLink
              key={ item.href }
              to={ item.href }
              end
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>

              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{ item.title }</span>
                <span className="text-sm text-white/50 hidden md:block">{ item.subTitle }</span>
              </div>
            </NavLink>
          ) )
        }


        

        <a className="mt-10">
          <div>
            <IoLogOutOutline />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">Logout</span>
            <span className="text-sm text-slate-500 hidden md:block">Cerrar sesión</span>
          </div>
        </a>

      </nav>
    </div>
  );
};