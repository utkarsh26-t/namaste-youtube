import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex bg-neutral-950 grow pt-4">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body