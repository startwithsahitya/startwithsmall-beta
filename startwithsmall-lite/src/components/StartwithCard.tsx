"use client"; // Mark as a Client Component

import React from "react";
import { useRouter } from "next/navigation"; // Updated import for App Router

interface CustomSVGProps {
  color1?: string;
  color2?: string;
  fixedText?: string;
  variableText?: string;
  textX?: string | number;
  textY?: string | number;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string | number;
}

const CustomSVG: React.FC<CustomSVGProps> = ({
  color1 = "#00BBFF",
  color2 = "#0075D5",
  fixedText = "Startwith",
  variableText = "Design",
  textX = "20",
  textY = "30",
  fontSize = 24,
  fontFamily = "Arial",
  fontWeight = "normal",
}) => {
  const router = useRouter();

  const handleClick = () => {
    // Generate slug from variableText
    const slug = variableText
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, ""); // Remove non-word chars

    // Navigate to the generated slug
    router.push(`/${slug}`);
  };

  return (
    <svg
      width="238"
      height="201"
      viewBox="0 0 238 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {/* Main shape with customizable color1 */}
      <g filter="url(#filter0_d_1532_1326)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 0.00012207C4.44772 0.00012207 4 0.447842 4 1.00013V143C4 170.614 26.3858 193 54 193H159C192.137 193 219 166.137 219 133V20.0001C219 8.95443 210.046 0.00012207 199 0.00012207H5Z"
          fill={color1}
        />
      </g>

      {/* Secondary shape with customizable color2 */}
      <path
        d="M120.407 189.998C123.492 189.671 126.441 188.554 128.966 186.753L199.867 136.193C213.291 126.62 231.451 138.634 227.893 154.733L222.556 178.884C220.734 187.13 213.424 193 204.98 193H92L120.407 189.998Z"
        fill={color2}
      />

      {/* Text Elements - Top Left Aligned */}
      <text
        x={textX}
        y={textY}
        dominantBaseline="hanging"
        textAnchor="start"
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill="#FFFFFF"
        style={{ pointerEvents: "none", userSelect: "none" }}
      >
        {fixedText}
        <tspan x={textX} dy="1.5em">
          {variableText}
        </tspan>
      </text>

      <defs>
        <filter
          id="filter0_d_1532_1326"
          x="0"
          y="0.00012207"
          width="223"
          height="201"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          {/* Filter definitions remain same */}
        </filter>
      </defs>
    </svg>
  );
};

export default CustomSVG;
