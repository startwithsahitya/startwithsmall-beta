// [slug]layout.tsx
"use client";

import LeftNav from "@/components/LeftNav";

import { ReactNode, useState } from "react";
import { useParams } from "next/navigation";
import React from "react";

export default function StartWithSmallLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { slug } = useParams();
  const [activeItem, setActiveItem] = useState<string | null>("Communities");
  const [activeDropdownItem, setActiveDropdownItem] = useState<string | null>(
    "StartwithSmall"
  );
  const [rightSelectedItem, setRightSelectedItem] = useState<string | null>(
    null
  );

  console.log("Layout State:", {
    activeItem,
    activeDropdownItem,
    rightSelectedItem,
  });

  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="h-screen sticky top-0">
        <LeftNav
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          activeDropdownItem={activeDropdownItem}
          setActiveDropdownItem={setActiveDropdownItem}
        />
      </div>

      <main className="flex-1 overflow-auto">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, {
                activeItem,
                activeDropdownItem,
                rightSelectedItem,
              })
            : child
        )}
      </main>

      <div className="h-screen sticky top-0"></div>
    </div>
  );
}
