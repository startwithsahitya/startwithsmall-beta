"use client";

import React from "react";
import { useParams } from "next/navigation";

const StartwithDesignPage: React.FC = () => {
  const { slug } = useParams();
  if (!slug) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Welcome to the {slug} page</h1>
      <p>This is a random page for the {slug} design.</p>
    </div>
  );
};

export default StartwithDesignPage;
