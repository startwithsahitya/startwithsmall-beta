import CustomSVG from "@/components/StartwithCard";
import StartwithCard from "@/components/StartwithCard";
import BlogCard from "@/components/blogcard"; // Import the BlogCard component
import React from "react";

const StartwithSmallPage: React.FC = () => {
  const blogs = [
    {
      notionWeblink:
        "https://xv1ngqxeo1xn6oz.embednotionpage.com/The-Art-of-Worldbuilding-Crafting-Vivid-and-Believable-Fictional-Realms-19bd5e69310080cd8c7bf5390f7b4d06", // Replace with your Embed Notion Pages URL
      name: "John Doe",
      designation: "Software Engineer",
      description: "This is a sample blog post description.",
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
        startwithsmall
      </h1>
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "10px",
          flexWrap: "wrap",
        }}
      >
        <CustomSVG
          color1="#0075D5"
          color2="#0075D5"
          fixedText="Startwith"
          variableText="Design"
          textX="30"
          textY="40"
          fontSize={20}
          fontFamily="Poppins"
          fontWeight="600"
        />
        <CustomSVG
          color1="#0075D5"
          color2="#FFE9AB"
          fixedText="Startwith"
          variableText="Creative Writing"
          textX="30"
          textY="40"
          fontSize={20}
          fontFamily="Poppins"
          fontWeight="600"
        />
        <CustomSVG
          color1="#0075D5"
          color2="#FEB7E1"
          fixedText="Startwith"
          variableText="Code"
          textX="30"
          textY="40"
          fontSize={20}
          fontFamily="Poppins"
          fontWeight="600"
        />
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
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              slug="startwithsmall"
              name={blog.name}
              designation={blog.designation}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartwithSmallPage;
