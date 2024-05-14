import React from "react";
import { Feed } from "../Feed";
import { Sidebar } from "../Sidebar";
import { Card } from "../../core/components/ui/Cards";

export default function Home() {
  return (
    <div className=" mx-auto  px-4   flex flex-col lg:flex-row   overflow-y-auto   ">
      <Feed />
    </div>
  );
}
