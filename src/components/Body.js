import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex bg-black grow">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body