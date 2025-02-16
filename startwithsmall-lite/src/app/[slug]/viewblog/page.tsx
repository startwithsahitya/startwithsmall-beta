// pages/blog/viewblog.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ViewBlog: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const notionWeblink = searchParams.get("notionWeblink");

  // Construct the embed URL
  const embedUrl = notionWeblink as string;

  // Function to handle the back button click
  const handleBack = () => {
    router.back(); // Navigates to the previous page in the history stack
  };

  return (
    <iframe
      src="https://o6eozgy96qn9y9m.embednotionpage.com/The-Power-of-the-Mark-How-Logo-Design-Amplifies-Your-Brand-Identity-19bd5e6931008025b641ce4b83d5e1c5?pvs=4"
      style={{ width: "100%", height: "100%", border: "none", padding: "0" }}
    ></iframe>
  );
};

export default ViewBlog;
