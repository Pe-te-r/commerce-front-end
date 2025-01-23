import { Link, useLocation } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuCircle } from "react-icons/lu";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";

const SideNav = ({ className }: { className?: string }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`side-nav relative bg-gray-400 text-white fixed left-0 overflow-y-auto ${className}`}>
      <nav className="flex flex-col p-4 space-y-2">
        <h2 className='py-2 rounded px-4 font-bold text-blue-900 '>ADMIN DASHBOARD</h2>
        <Link to="/admin" className={`py-2 px-4 rounded ${isActive('/admin') ? 'bg-blue-500 text-black' : 'hover:bg-blue-500 hover:text-black bg-blue-800 text-white'}`}>
          <span className='flex items-center'>
            <RiDashboardHorizontalFill size={30} className='mr-2' />Dashboard
          </span>
        </Link>
        <Link to="/admin/users" className={`py-2 px-4 rounded ${isActive('/admin/users') ? 'bg-blue-500 text-black' : 'hover:bg-blue-500 hover:text-black bg-blue-800 text-white'}`}>
          <span className='flex items-center'>
            <FaUsers className='mr-2' size={30} />Users
          </span>
        </Link>
  
        <Link to="/admin/messages" className={`py-2 px-4 rounded ${isActive('/admin/messages') ? 'bg-blue-500 text-black' : 'hover:bg-blue-500 hover:text-black bg-blue-800 text-white'}`}>
          <span className='flex items-center'>
            <TiMessages className='mr-2' size={30} />Messages
          </span>
        </Link>
      
        <Link to="/admin/settings" className={`py-2 px-4 rounded ${isActive('/admin/settings') ? 'bg-blue-500 text-black' : 'hover:bg-blue-500 hover:text-black bg-blue-800 text-white'}`}>
          <span className='flex items-center'>
            <IoSettings className='mr-2' size={30} />Settings
          </span>
        </Link>
        <Link to="/admin/profile" className={`py-2 px-4 rounded ${isActive('/admin/profile') ? 'bg-blue-500 text-black' : 'hover:bg-blue-500 hover:text-black bg-blue-800 text-white'}`}>
          <span className='flex items-center'>
            <LuCircle className='mr-2' size={30} />Profile
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
