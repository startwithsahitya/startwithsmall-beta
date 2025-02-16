import OppCard from "@/components/OpportunityCard";
import CustomSVG from "@/components/StartwithCard";
import StartwithCard from "@/components/StartwithCard";
import BlogCard from "@/components/blogcard"; // Import the BlogCard component
import React from "react";

const StartwithSmallPage: React.FC = () => {
  const competitions = [
    {
      link: "www.hackerearth.com/challenges/hackathon/pbc-hackathon-25/", // Replace with your Embed Notion Pages URL
      name: "PBC Hackathon '25",

      description:
        "Calling all coders and innovators! Join us for PBC Hackathon '25, a two-day event where teams collaborate to develop tech solutions addressing pressing community challenges. Learn from industry experts, network with like-minded individuals, and showcase your skills. Prizes, workshops, and a fun-filled atmosphere await. Register now and unlock your problem-solving potential! #PBChack25 #CodeforChange",
    },
    {
      link: "www.hackerearth.com/challenges/hackathon/hack-for-india-ai-agents-transforming-lives/", // Replace with your Embed Notion Pages URL
      name: "PBC Hackathon '25",

      description:
        "Join us for 'Hack for India: AI Agents Transforming Lives', where tech enthusiasts, problem solvers, and social innovators come together to create AI-powered solutions for India's pressing challenges. Utilize AI techniques to enhance healthcare, education, agriculture, and more. Together, let's harness technology's potential to empower communities and build a brighter future.",
    },
    {
      link: "https://www.hackerearth.com/challenges/hiring/jb-hc-front-end-developer-nextjs/", // Replace with your Embed Notion Pages URL
      name: "Jackpot.bet Frontend challenge - up to 45 LPA",

      description:
        "Calling all coders and innovators! Join us for PBC Hackathon '25, a two-day event where teams collaborate to develop tech solutions addressing pressing community challenges. Learn from industry experts, network with like-minded individuals, and showcase your skills. Prizes, workshops, and a fun-filled atmosphere await. Register now and unlock your problem-solving potential! #PBChack25 #CodeforChange",
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
        Opportunities
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
          Blogs
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
