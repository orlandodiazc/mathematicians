import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper d-flex flex-column vh-100">
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;
