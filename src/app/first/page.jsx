"use client";

import React from "react";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return <div>page</div>;
};

export default page;
