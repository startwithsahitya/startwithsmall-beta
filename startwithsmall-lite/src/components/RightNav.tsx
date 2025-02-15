"use client";
import styles from "./RightNav.module.css";

interface RightNavProps {
  activeItem: string | null;
  activeDropdownItem: string | null;
  slug: string;
}

export default function RightNav({
  activeItem,
  activeDropdownItem,
  slug,
}: RightNavProps) {
  const getRightNavItems = () => {
    if (activeDropdownItem) {
      switch (activeDropdownItem) {
        case "StartwithSmall":
          return ["Communities", "Home"];
        case "StartwithDesign":
          return ["Guidelines", "Home", "Group Chat", "Case Study"];
        case "StartwithCreativeWriting":
          return ["Guidelines", "Home", "Group Chat", "Case Study"];
        case "StartwithProgramming":
          return ["Guidelines", "Home", "Group Chat", "Case Study"];
        // Add more cases for other dropdown items
        default:
          return ["Guidelines", "Home", "Case Study", "Meetups", "Review"];
      }
    }

    switch (activeItem) {
      case "Communities":
        return ["All Communities", "Popular", "New"];
      case "Learn":
        return ["Let us Master", "Design", "Creative Writing", "Programming"];
      case "Opportunities":
        return ["Opportunities"];
      case "Connections":
        return ["Find People"];
      case "Open Source":
        return ["Projects"];
      case "Our Startups":
        return ["Startups"];
      case "Blogs":
        return ["Home", "Search Blogs"];
      case "Announcements":
        return ["Announcements"];
      case "Your Profile":
        return ["Profile"];

      // Add more cases for other main items
      default:
        return ["Guidelines", "Home", "Case Study", "Meetups", "Review"];
    }
  };

  return (
    <nav className={styles.rightNav}>
      <p className={styles.username}>{slug || "Hello"}</p>
      <ul className={styles.navList}>
        {getRightNavItems().map((item) => (
          <li key={item} className={styles.navItem}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
