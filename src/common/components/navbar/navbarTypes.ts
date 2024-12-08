export interface NavbarOptions {
  name: string, 
  path: string,
}

export interface NavbarOptionProps {
  name: string;
  route: string;
  isSelected?: boolean;
  onClick: (name:string) => void;
}