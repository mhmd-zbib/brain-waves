import { AiOutlineHome } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaBrainSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";

import NavItem from "./NavItem";
import { Accordion, AccordionItem } from "../components/DropdownTest";

export default function NavOptions() {
  const handleSelect = (option: string) => {
    console.log("Selected option:", option);
  };

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

      <Accordion>
        <AccordionItem title="Courses" index={0}>
          <NavItem title="CSCI250" navTo="Course" />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
