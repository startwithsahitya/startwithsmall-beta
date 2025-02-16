import OppCard from "@/components/OpportunityCard";
import BlogCard from "@/components/blogcard"; // Import the BlogCard component
import React from "react";

const StartwithSmallPage: React.FC = () => {
  const competitions = [
    {
      link: "https://github.com/freeCodeCamp/freeCodeCamp", // Replace with your Embed Notion Pages URL
      name: ". freeCodeCamp",

      description:
        "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free",
    },
    {
      link: " https://github.com/CyC2018/CS-Notes", // Replace with your Embed Notion Pages URL
      name: "CS-Notes",

      description:
        "books: 技术面试必备基础知识、Leetcode、计算机操作系统、计算机网络、系统设计",
    },
    {
      link: "https://github.com/ossu/computer-science", // Replace with your Embed Notion Pages URL
      name: "computer-science",

      description: "Path to a free self-taught education in Computer Science!",
    },
    // Add more blogs here if needed
  ];

  return (
    <div>
      {/* Existing Content */}
      <h1
        style={{
          padding: "60px",
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "64px",
          color: "#ffffff",
        }}
      >
        OpenSource
      </h1>
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "10px",
          flexWrap: "wrap",
        }}
      >
        {/* Other CustomSVG components remain the same */}
      </div>

      {/* Blog Section */}
      <div
        style={{
          padding: "60px",
        }}
      >
        <h2
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "32px",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          Projects
        </h2>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {competitions.map((competitions, index) => (
            <OppCard
              key={index}
              link={competitions.link}
              name={competitions.name}
              description={competitions.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartwithSmallPage;
