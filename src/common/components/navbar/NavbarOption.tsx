import Link from "next/link";

import { NavbarOptionProps } from "./navbarTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarOption = ( {option, onClick}: NavbarOptionProps ) => {
  return(
    <li key={option.path}
      className={
        `px-5 py-1.5
        rounded-3xl
        font-semibold
        text-black
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
          className={`${option.selected ? "text-secondary" : "text-pale"}`}
          icon={option.icon} size="lg"/>
      </Link>
    </li>
  );
}

export default NavbarOption