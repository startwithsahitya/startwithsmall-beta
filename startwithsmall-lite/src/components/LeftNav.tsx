"use client";
import { useState } from "react";
import styles from "./LeftNav.module.css";
import StartwithSmallLogo from "./StartwithSmallLogo";

interface LeftNavProps {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  activeDropdownItem: string | null;
  setActiveDropdownItem: (item: string | null) => void;
}

export default function LeftNav({
  activeItem,
  setActiveItem,
  activeDropdownItem,
  setActiveDropdownItem,
}: LeftNavProps) {
  return (
    <nav className={styles.leftNav}>
      <StartwithSmallLogo />

      <ul className={styles.navList}>
        {/* Communities with Dropdown */}
        <li
          className={`${styles.navItem} ${styles.dropdownParent} ${
            activeItem === "Communities" ? styles.active : ""
          }`}
          onClick={() => {
            setActiveItem(activeItem === "Communities" ? null : "Communities");
            setActiveDropdownItem(null); // Reset dropdown item when closing Communities
          }}
        >
          Communities
        </li>
        {activeItem === "Communities" && (
          <ul className={styles.dropdownMenu}>
            {[
              "StartwithSmall",
              "StartwithDesign",
              "StartwithCreativeWriting",
              "StartwithProgramming",
            ].map((item) => (
              <li
                key={item}
                className={`${styles.dropdownItem} ${
                  activeDropdownItem === item ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling to parent
                  setActiveDropdownItem(
                    activeDropdownItem === item ? null : item
                  );
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Other Navigation Items */}
        {[
          "Learn",
          "Opportunities",
          "Open Source",
          "Our Startups",
          "Blogs",
          "Announcements",
          "Your Profile",
        ].map((item) => (
          <li
            key={item}
            className={`${styles.navItem} ${
              activeItem === item ? styles.active : ""
            }`}
            onClick={() => {
              setActiveItem(activeItem === item ? null : item);
              setActiveDropdownItem(null); // Reset dropdown item when clicking other nav items
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
