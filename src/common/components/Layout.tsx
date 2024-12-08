import React, { ReactNode } from 'react';
import Navbar from '@/common/components/navbar/Navbar';

type LayoutProps = {
  children: ReactNode;
  currentPath?: string;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, currentPath, className } ) => {

  return (
    <div 
      className={`
        flex flex-col gap-8
        justify-center items-center 
        w-full bg-blue-500
      `}
    >
      <Navbar currentPath={currentPath}/>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
