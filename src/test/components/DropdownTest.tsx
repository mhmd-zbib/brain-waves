import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  FC,
} from "react";
import NavItem from "../Layout/NavItem";
import { RiArrowDownSLine } from "react-icons/ri";

interface AccordionProps {
  children: ReactNode;
}

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  index: number;
}

interface AccordionContextProps {
  openItemIndex: number | null;
  setOpenItemIndex: (index: number | null) => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

const Accordion: FC<AccordionProps> = ({ children }) => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openItemIndex, setOpenItemIndex }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem: FC<AccordionItemProps> = ({ title, children, index }) => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }
  const { openItemIndex, setOpenItemIndex } = context;
  const isOpen = openItemIndex === index;
  const handleToggle = () => {
    setOpenItemIndex(isOpen ? null : index);
  };

  return (
    <div>
      <button
        className="w-full px-4 py-2 text-left  text-lg  focus:outline-none flex flex-row items-center justify-between"
        onClick={handleToggle}
      >
        <p>{title}</p>
        <RiArrowDownSLine />
      </button>
      {isOpen && <div className="p-4 border-t">{children}</div>}
    </div>
  );
};

export { Accordion, AccordionItem };
