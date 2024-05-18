import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  title: string;
  navTo: string;
  icon?: ReactNode;
}

export default function NavItem({ title, navTo, icon }: NavItemProps) {
  return (
    <Link
      to={navTo}
      className="flex items-center space-x-4 px-4 py-2 text-lg  hover:bg-tertiary rounded-lg "
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <span className="text-md">{title}</span>
    </Link>
  );
}
