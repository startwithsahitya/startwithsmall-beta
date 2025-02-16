"use client"; // Mark this as a Client Component (required for interactivity)

import { useRouter } from "next/navigation"; // Updated import for Next.js 15
import React from "react";
import styles from "./BlogCard.module.css"; // Import the CSS module

interface BlogCardProps {
  slug: string; // Add slug prop
  name: string;
  designation: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  name,
  designation,
  description,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${slug}/viewblog`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      {/* Name */}
      <div className={styles.name}>{name}</div>

      {/* Designation */}
      <p className={styles.designation}>{designation}</p>

      {/* Description */}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BlogCard;
