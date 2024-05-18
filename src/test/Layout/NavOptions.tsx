import React from "react";
import { AiOutlineHome, AiOutlineBook } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import NavItem from "./NavItem";

export default function NavOptions() {
  return (
    <div className="flex gap-2 flex-col">
      <NavItem title="Home" navTo="home" icon={<AiOutlineHome />} />
      <NavItem title="Resources" navTo="resources" icon={<AiOutlineBook />} />
      <NavItem title="Major" navTo="major" icon={<FaGraduationCap />} />
    </div>
  );
}
