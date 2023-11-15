import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RiCloseLine,
  RiDashboardLine,
  RiListCheck2,
  RiMenu3Fill,
  RiStethoscopeLine,
} from 'react-icons/ri';
import logo from '../assets/images/logo.png';
import sidebarImg from '../assets/images/undraw_diary_re_4jpc.svg';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => setSidebar(!sidebar);

  const menu = [
    { name: 'Dashboard', icon: <RiDashboardLine className="mr-4" />, path: '/dashboard' },
    { name: 'Insumos', icon: <RiStethoscopeLine className="mr-4" />, path: '/insumos' },
    { name: 'Inventario', icon: <RiListCheck2 className="mr-4" />, path: '/inventario' },
  ];

  return (
    <aside>
      <div className={`fixed bg-white lg:static top-0 ${(sidebar) ? '-left-0' : '-left-full'} w-full h-full overflow-y-scroll col-span-1 p-8 border-r transition-all`}>
        {/* Logo */}
        <div className="text-center p-4 mb-4">
          <img src={logo} alt="logo" className="hidden lg:block w-min" />
          <h1 className="uppercase font-bold tracking-[4px] pt-4">Inventario Insumos</h1>
        </div>

        <div className="flex flex-col h-max">
          {/* Menu */}
          <nav>
            <ul>
              {
                menu.map((item, index) => (
                  <li key={index} className="py-1">
                    <Link to={item.path} className="flex items-center gap-4 text-gray-500 font-semibold hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors">
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ),
                )
              }
            </ul>
          </nav>

          {/* Img */}
          <div className="flex flex-col gap-4 pt-10">
            <img src={sidebarImg} alt="img" className="hidden lg:block w-fit" />
          </div>

        </div>

      </div>

      {/* Show Sidebar Responsive */}
      <button type="button" onClick={handleSidebar} className="block lg:hidden z-100 absolute bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl">
        { (sidebar) ? <RiCloseLine /> : <RiMenu3Fill /> }
      </button>
    </aside>
  );
}

export default Sidebar;
