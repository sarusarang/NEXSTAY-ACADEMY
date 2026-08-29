import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#071322] selection:bg-[#c59b27]/20 selection:text-[#0a192f] overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full relative overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
