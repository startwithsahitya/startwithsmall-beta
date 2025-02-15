"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./HomePage.module.css"; // Import the CSS file

export default function HomePage() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      router.push(`/${encodeURIComponent(input.trim())}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dynamic Routing Example</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Enter a value..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Go
        </button>
      </form>
    </div>
  );
}
