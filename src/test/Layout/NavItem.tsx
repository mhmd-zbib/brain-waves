import { ReactNode } from "react";

interface NavItemProps {
  title: string;
  navTo: string;
  icon?: ReactNode;
}

export default function NavItem({ title, navTo, icon }: NavItemProps) {
  return (
    <div className="flex items-center space-x-2 px-4 py-2 hover:bg-tertiary rounded-lg ">
      {icon && <span className="text-xl">{icon}</span>}
      <span className="text-md">{title}</span>
    </div>
  );
}
