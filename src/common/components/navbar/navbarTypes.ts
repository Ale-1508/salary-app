import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavbarOptionDefinition {
  name: string, 
  path: string,
  icon: IconDefinition,
  selected: boolean,
}

export interface NavbarOptionProps {
  option: NavbarOptionDefinition,
  isSelected?: boolean;
  onClick: (name:string) => void;
}