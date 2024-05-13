import React from "react";
import NavItem from "./NavItem";

export default function NavOptions() {
  const navOptions = [
    { name: "Home", icon: "home", route: "home" },
    { name: "Home", icon: "home", route: "home" },
    { name: "Home", icon: "home", route: "home" },
  ];

  return (
    <div className="flex flex-row gap-6">
      {navOptions.map((option) => (
        <NavItem
          name={option.name}
          icon={option.icon}
          route={option.route}
          key={option.name}
        />
      ))}
    </div>
  );
}
