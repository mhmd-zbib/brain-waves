import { AiOutlineHome } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaBrainSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";

import NavItem from "./NavItem";

export default function NavOptions() {
  return (
    <div className="flex gap-2 flex-col">
      <NavItem title="Home" navTo="home" icon={<AiOutlineHome />} />
      <NavItem
        title="Questions"
        navTo="q/home"
        icon={<IoChatbubblesOutline />}
      />
      <NavItem title="Resources" navTo="r/home" icon={<LiaBrainSolid />} />
      <NavItem title="Major" navTo="m/home" icon={<LuGraduationCap />} />
    </div>
  );
}
