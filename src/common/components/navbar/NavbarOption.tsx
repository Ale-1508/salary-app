import Link from "next/link";

import { NavbarOptionProps } from "./navbarTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarOption = ( {option, isSelected, onClick}: NavbarOptionProps ) => {
  return(
    <li key={option.path}
      className={
        `px-4 py-3
        rounded-3xl
        font-semibold
        text-black
        ${isSelected && "bg-pale bg-opacity-20"}
        `
      }
    >
      <Link
        href={ option.path }
        onClick={ ()=>{
          onClick( option.name )
        } }
      >
        <FontAwesomeIcon 
          className={`${isSelected ? "text-secondary" : "text-pale"}`}
          icon={option.icon} size="lg"/>
      </Link>
    </li>
  );
}

export default NavbarOption