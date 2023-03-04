import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper text-bg-dark min-vh-100 pb-3">
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;
