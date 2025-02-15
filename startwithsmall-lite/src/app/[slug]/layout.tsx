"use client";

import LeftNav from "@/components/LeftNav";
import RightNav from "@/components/RightNav";
import { ReactNode, useState } from "react";
import { useParams } from "next/navigation";

export default function StartWithSmallLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { slug } = useParams(); // Get the dynamic slug
  const [activeItem, setActiveItem] = useState<string | null>(null); // State for active main nav item
  const [activeDropdownItem, setActiveDropdownItem] = useState<string | null>(
    null
  ); // State for active dropdown item

  return (
    <div className="flex min-h-screen">
      {/* LEFT NAV - Scrollable but scrollbar is hidden */}
      <div className="h-screen sticky top-0">
        <LeftNav
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          activeDropdownItem={activeDropdownItem}
          setActiveDropdownItem={setActiveDropdownItem}
        />
      </div>

      {/* MAIN CONTENT - Fixed */}
      <main className="flex-1 overflow-hidden">{children}</main>

      {/* RIGHT NAV - Fixed */}
      <RightNav
        activeItem={activeItem}
        activeDropdownItem={activeDropdownItem}
        slug={slug as string} // Pass the dynamic slug as a prop
      />
    </div>
  );
}
