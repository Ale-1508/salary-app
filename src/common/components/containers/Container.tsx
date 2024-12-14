import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children } ) => {
  return (
    <div 
      className={`
        w-full
        flex flex-col
        px-8 py-8
        rounded-4xl
        justify-stretch
        bg-secondary
        text-white
      `}
    >
      {children}
    </div>
  );
};

export default Container;
