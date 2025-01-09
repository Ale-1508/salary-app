import React, { ReactNode } from 'react';
import Navbar2 from '@/common/components/navbar/NavbarOld';
import { Navbar } from '@/common/components/navbar/Navbar';

type LayoutProps = {
  children: ReactNode;
  currentPath: string;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, currentPath, className } ) => {

  return (
    <div 
      className={`
        flex flex-col gap-8
        justify-center items-center 
        w-full max-w-192 h-100vh 
        bg-base selection:bg-pale
        selection:text-primary 
        px-4
      `}
    >
      <div className={
        `w-full max-w-96` + className
      }>
        {children}
      </div>
      <Navbar />
      <Navbar2 currentPath={currentPath}/>
    </div>
  );
};

export default Layout;
