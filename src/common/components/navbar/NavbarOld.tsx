"use client";

import { useEffect, useState } from 'react';
import { faHouse, faWallet, faChartPie  } from '@fortawesome/free-solid-svg-icons';

import { NavbarOptionDefinition } from './navbarTypes';
import NavbarOption from './NavbarOption';

const navbarOptions: NavbarOptionDefinition[] = [
  { name:"Salaries", path:"/salaries", icon: faWallet },
  { name:"Home", path:"/home", icon: faHouse },
  { name:"Charts",path:"/charts", icon: faChartPie, },
]

export default function Navbar2( { currentPath } : { currentPath:string } ) {
  const [currentScreen, setCurrentScreen] = useState(currentPath);

  const handleChangeRoute = (newRoute:string) => {
    setCurrentScreen(newRoute);
  }
  
  useEffect(() => {
    console.log("loaded navbar")
  }, [])
  
  return (
    <div className={`
      fixed bottom-0 left-0 
      flex justify-center
      w-full p-4 
    `}>
      <ul className={`
        flex flex-row gap-4
        justify-evenly items-center 
        max-w-96 w-full h-12
        mt-8 py-7
        rounded-2.5xl
        bg-white
      `}>
        {
          navbarOptions.map((option) => {
            return <NavbarOption 
              key={option.name.toLowerCase()} 
              option={option}
              isSelected={option.path === currentScreen.toLowerCase()}
              onClick={handleChangeRoute}/>
          })
        }
      </ul>
    </div>
  );
}