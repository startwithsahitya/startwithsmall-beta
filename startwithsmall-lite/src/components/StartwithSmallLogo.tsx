"use client";
import styles from "./StartwithSmallLogo.module.css";

export default function StartwithSmallLogo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <div className={styles.leftSection}>
          <svg
            width="54"
            height="53"
            viewBox="0 0 54 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.2389 17.7421V17.7421C27.0618 21.2391 14.4235 33.9819 10.9499 50.2985L10.7801 51.0961"
              stroke="white"
              strokeWidth="11"
            />
            <rect
              x="7.72324"
              y="3.56631"
              width="42.2033"
              height="7.67991"
              transform="rotate(0.520278 7.72324 3.56631)"
              fill="white"
              stroke="white"
              strokeWidth="7"
            />
            <rect
              x="-3.34758"
              y="-3.40893"
              width="42.4881"
              height="6.75679"
              transform="matrix(0.00908044 -0.999959 -0.999959 -0.00908044 46.2835 42.9368)"
              fill="white"
              stroke="white"
              strokeWidth="6.75679"
            />
          </svg>
        </div>
        <div className={styles.rightSection}>
          <p className={styles.tagline}>Bringing</p>
          <p className={styles.tagline}>together</p>
          <p className={styles.tagline}>communities</p>
        </div>
      </div>
      <h1 className={styles.brandName}>StartwithSmall</h1>
    </div>
  );
}
