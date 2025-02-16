"use client";

interface PageProps {
  activeItem: string | null;
  activeDropdownItem: string | null;
  rightSelectedItem: string | null;
}

export default function Page({
  activeItem,
  activeDropdownItem,
  rightSelectedItem,
}: PageProps) {
  // Content mapping function
  const getContent = () => {
    // Handle dropdown-based content first
    if (activeDropdownItem) {
      switch (activeDropdownItem) {
        case "StartwithSmall":
          return renderCommunityContent(rightSelectedItem);
        case "StartwithDesign":
        case "StartwithCreativeWriting":
        case "StartwithProgramming":
          return renderSpecializedContent(
            activeDropdownItem,
            rightSelectedItem
          );
        default:
          return <DefaultContent />;
      }
    }

    // Handle main navigation items
    if (activeItem) {
      switch (activeItem) {
        case "Communities":
          return <CommunitiesContent selection={rightSelectedItem} />;
        case "Learn":
          return <LearnContent selection={rightSelectedItem} />;
        case "Opportunities":
          return <OpportunitiesContent />;
        case "Open Source":
          return <OpenSourceContent />;
        case "Our Startups":
          return <StartupsContent />;
        case "Blogs":
          return <BlogsContent selection={rightSelectedItem} />;
        case "Announcements":
          return <AnnouncementsContent />;
        case "Your Profile":
          return <ProfileContent />;
        default:
          return <DefaultContent />;
      }
    }

    // Default content when nothing is selected
    return <DefaultContent />;
  };

  return (
    <div className="p-4 space-y-4">
      <header className="border-b pb-4">
        <h1 className="text-2xl font-bold">
          {activeDropdownItem || activeItem || "Welcome to StartWithSmall"}
        </h1>
        {rightSelectedItem && (
          <p className="text-gray-600 mt-2">Viewing: {rightSelectedItem}</p>
        )}
      </header>

      <div className="content-area">{getContent()}</div>
    </div>
  );
}

// Content Components
const DefaultContent = () => (
  <div className="text-center py-8 text-gray-500">
    Select an item from the navigation to begin
  </div>
);

const CommunitiesContent = ({ selection }: { selection: string | null }) => {
  switch (selection) {
    case "All Communities":
      return <div>List of all communities...</div>;
    case "Popular":
      return <div>Popular communities...</div>;
    case "New":
      return <div>New communities...</div>;
    default:
      return <div>Select a community category</div>;
  }
};

const LearnContent = ({ selection }: { selection: string | null }) => {
  switch (selection) {
    case "Let us Master":
      return <div>Master learning path...</div>;
    case "Design":
      return <div>Design resources...</div>;
    case "Creative Writing":
      return <div>Writing courses...</div>;
    case "Programming":
      return <div>Programming tutorials...</div>;
    default:
      return <div>Select a learning path</div>;
  }
};

const renderCommunityContent = (selection: string | null) => {
  switch (selection) {
    case "Communities":
      return <div>Community members...</div>;
    case "Home":
      return <div>Community home feed...</div>;
    case "Group Chat":
      return <div>Community chat interface...</div>;
    case "Case Study":
      return <div>Community case studies...</div>;
    default:
      return <div>Community overview...</div>;
  }
};

const renderSpecializedContent = (
  community: string,
  selection: string | null
) => {
  const communityName = community.replace("Startwith", "");

  switch (selection) {
    case "Guidelines":
      return <div>{communityName} community guidelines...</div>;
    case "Home":
      return <div>{communityName} community home...</div>;
    case "Group Chat":
      return <div>{communityName} group chat...</div>;
    case "Case Study":
      return <div>{communityName} case studies...</div>;
    case "Meetups":
      return <div>{communityName} meetup schedule...</div>;
    case "Review":
      return <div>{communityName} project reviews...</div>;
    default:
      return <div>Select a {communityName} section</div>;
  }
};

// Add other content components as needed
const OpportunitiesContent = () => <div>Current opportunities list...</div>;
const OpenSourceContent = () => <div>Open source projects...</div>;
const StartupsContent = () => <div>Startup showcase...</div>;
const BlogsContent = ({ selection }: { selection: string | null }) => (
  <div>
    {selection === "Search Blogs" ? "Blog search..." : "Latest blogs..."}
  </div>
);
const AnnouncementsContent = () => <div>Latest announcements...</div>;
const ProfileContent = () => <div>User profile dashboard...</div>;
