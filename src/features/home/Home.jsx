import React from "react";
import { Feed } from "../Feed";

export default function Home() {
  return (
    <div className=" mx-auto  px-4   flex flex-col lg:flex-row   overflow-y-auto   ">
      <Feed />
    </div>
  );
}
