import { Outlet, Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import Users from './users/Users';
import Settings from './settings/Settings';
const Dashboard = () => {
  return (
    <div className='dashboardDiv bg-gray-200'>
      {/* <Navbar /> */}
      <div className="flex ">
        <SideNav className="" />
        <div className="flex-1 min-h-screen h-auto p-4 ml-2">
          <Routes>
            <Route path="/" element={<div>Welcome to the Dashboard</div>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


