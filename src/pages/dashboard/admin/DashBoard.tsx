import { Outlet, Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import Users from './Users';
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
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


