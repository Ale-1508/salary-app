import Link from "next/link";

import { NavbarOptionProps } from "./navbarTypes";

const NavbarOption = ( {name, route, onClick}: NavbarOptionProps ) => {
  return(
    <li key={route}
      className={
        `px-5 py-1.5
        rounded-3xl
        font-semibold
        text-black
        `
      }
    >
      <Link
        href={ route }
        onClick={ ()=>{
          onClick(name)
        } }
      >
        {name}
      </Link>
    </li>
  );
}

export default NavbarOption