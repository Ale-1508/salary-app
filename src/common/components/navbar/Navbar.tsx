'use client';
import { ReactNode, useRef, useState } from "react";
import { motion } from 'framer-motion'

interface Position {
  left: number,
  width: number,
  opacity: number,
}

export const Navbar = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return(
    <ul 
    onMouseLeave={()=>{
      setPosition( prevPosition => ({
        ...prevPosition,
        opacity: 0,
      }))
    }}
    className={`
      relative 
      flex w-fit 
      mx-auto p-1
      rounded-full 
      border-2 border-black
      bg-white
    `}>
      <Option setPosition={setPosition}>Home</Option>
      <Option setPosition={setPosition}>Pricing</Option>
      <Option setPosition={setPosition}>Features</Option>
      <Option setPosition={setPosition}>Docs</Option>
      <Option setPosition={setPosition}>Blog</Option>

      <Cursor position={position} />
    </ul>
  );
}

const Option = ({ children, setPosition }: { children: ReactNode, setPosition: (arg0: Position) => void }) => {
  const ref = useRef<HTMLLIElement>(null);

  return(
  <li 
    ref={ref}
    onMouseEnter={() => {
      if (!ref.current) return;
      
      const {width} = ref.current.getBoundingClientRect();
      setPosition({
        width,
        opacity: 1,
        left: ref.current.offsetLeft,
      })
    }}
    className={`
      relative block
      cursor-pointer z-10 
      
      px-3 py-1.5 
      md:px-5 md:py-3

      text-xs md:text-base
      text-white uppercase
      mix-blend-difference
  `}>
    {children}
  </li>
  );
}

const Cursor = ({position}: {position: Position}) => {
  return(
    <motion.li 
      animate={
        {
          left: position.left,
          width: position.width,
          opacity: position.opacity,
        }
      }
      className={`
        absolute z-7 
        w-36
        h-7 md:h-12 
        rounded-full
        bg-black 
      `} 
    />
  );
}