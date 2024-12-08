"use client";

import { useEffect, useState } from 'react';

import { NavbarOptions } from './navbarTypes';
import NavbarOption from './NavbarOption';

const navbarOptions: NavbarOptions[] = [
  { name:"Wallets", path:"/wallets" },
  { name:"Home", path:"/" },
  { name:"Charts",path:"/charts"  },
]

export default function Navbar( { currentPath } : { currentPath?:string } ) {
  const [currentScreen, setCurrentScreen] = useState(currentPath);

  const handleChangeRoute = (newRoute:string) => {
    setCurrentScreen(newRoute);
  }
  
  useEffect(() => {
    console.log("loaded navbar")
  }, [])
  
  return (
    <ul className={`
      flex flex-row gap-4
      justify-evenly items-center 
      max-w-96 h-12
      mt-8 p-4
      rounded-2.5xl
      bg-base
    `}>
      {
        navbarOptions.map((option) => {
          return <NavbarOption 
            key={option.name.toLowerCase()} 
            name={option.name} 
            route={option.path.toLowerCase()} 
            isSelected={option.name === currentScreen}
            onClick={handleChangeRoute}/>
        })
      }
    </ul>
  );
}