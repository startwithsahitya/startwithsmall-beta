"use client";
import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import styles from "./LeftNav.module.css";
import StartwithSmallLogo from "./StartwithSmallLogo";

interface LeftNavProps {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  activeDropdownItem: string | null;
  setActiveDropdownItem: (item: string | null) => void;
}

const dropdownItems = [
  "StartwithSmall",
  "StartwithDesign",
  "StartwithCreativeWriting",
  "StartwithProgramming",
] as const;

export default function LeftNav({
  activeItem,
  setActiveItem,
  activeDropdownItem,
  setActiveDropdownItem,
}: LeftNavProps) {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    console.log("LeftNav State:", { activeItem, activeDropdownItem });
  }, [activeItem, activeDropdownItem]);

  const toPathSegment = (item: string) => {
    return item.toLowerCase().replace(/ /g, "");
  };

  return (
    <nav className={styles.leftNav}>
      <StartwithSmallLogo />
      <ul className={styles.navList}>
        <li
          className={`${styles.navItem} ${styles.dropdownParent} ${
            activeItem === "Communities" ? styles.active : ""
          }`}
          onClick={() => {
            const newActive =
              activeItem === "Communities" ? null : "Communities";
            setActiveItem(newActive);
            setActiveDropdownItem(newActive ? "StartwithSmall" : null);
          }}
        >
          Communities
        </li>

        {activeItem === "Communities" && (
          <ul className={styles.dropdownMenu}>
            {dropdownItems.map((item) => (
              <li
                key={item}
                className={`${styles.dropdownItem} ${
                  activeDropdownItem === item ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdownItem(item);
                  router.push(`/${slug}/${toPathSegment(item)}`);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}

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
              setActiveItem(item);
              setActiveDropdownItem(null);
              router.push(`/${slug}/${toPathSegment(item)}`);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
