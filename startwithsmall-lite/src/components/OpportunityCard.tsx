// components/BlogCard.tsx
"use client"; // Mark this as a Client Component (required for interactivity)

import { useRouter } from "next/navigation"; // Updated import for Next.js 15
import React from "react";
import styles from "./OpportunityCard.module.css"; // Import the CSS module

interface OppCardProps {
  link: string;
  name: string;

  description: string;
}

const OppCard: React.FC<OppCardProps> = ({
  link,
  name,

  description,
}) => {
  const router = useRouter();

  const handleClick = () => {
    const url = link.startsWith("http") ? link : `https://${link}`;
    window.open(encodeURI(url), "_blank");
  };

  return (
    <div
      className={styles.card} // Apply the CSS module class
      onClick={handleClick}
    >
      {/* Name */}
      <div className={styles.name}>{name}</div>

      {/* Description */}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default OppCard;
