"use client";

export const ContentComponents = {
  // Dropdown-based Communities
  StartwithSmall: {
    Communities: () => <div>StartwithSmall Community Members</div>,
    Home: () => <div>StartwithSmall Home Feed</div>,
    "Group Chat": () => <div>StartwithSmall Group Chat Interface</div>,
    "Case Study": () => <div>StartwithSmall Case Studies</div>,
    Default: () => <div>Select a StartwithSmall Section</div>,
  },
  StartwithDesign: {
    Guidelines: () => <div>Design Community Guidelines</div>,
    Home: () => <div>Design Community Home</div>,
    "Group Chat": () => <div>Design Group Chat Interface</div>,
    "Case Study": () => <div>Design Case Studies</div>,
    Meetups: () => <div>Design Meetup Schedule</div>,
    Review: () => <div>Design Project Reviews</div>,
    Default: () => <div>Select a Design Community Section</div>,
  },
  StartwithCreativeWriting: {
    Guidelines: () => <div>Writing Community Guidelines</div>,
    Home: () => <div>Writing Community Home</div>,
    "Group Chat": () => <div>Writing Group Chat Interface</div>,
    "Case Study": () => <div>Writing Case Studies</div>,
    Meetups: () => <div>Writing Meetup Schedule</div>,
    Review: () => <div>Writing Project Reviews</div>,
    Default: () => <div>Select a Writing Community Section</div>,
  },
  StartwithProgramming: {
    Guidelines: () => <div>Programming Community Guidelines</div>,
    Home: () => <div>Programming Community Home</div>,
    "Group Chat": () => <div>Programming Group Chat Interface</div>,
    "Case Study": () => <div>Programming Case Studies</div>,
    Meetups: () => <div>Programming Meetup Schedule</div>,
    Review: () => <div>Programming Project Reviews</div>,
    Default: () => <div>Select a Programming Community Section</div>,
  },

  // Main Navigation Items
  Communities: {
    "All Communities": () => <div>All Communities List</div>,
    Popular: () => <div>Popular Communities</div>,
    New: () => <div>New Communities</div>,
    Default: () => <div>Select a Community Category</div>,
  },
  Learn: {
    "Let us Master": () => <div>Master Learning Path</div>,
    Design: () => <div>Design Resources</div>,
    "Creative Writing": () => <div>Creative Writing Courses</div>,
    Programming: () => <div>Programming Tutorials</div>,
    Default: () => <div>Select a Learning Path</div>,
  },
  Opportunities: {
    Opportunities: () => <div>Current Opportunities List</div>,
    Default: () => <div>Opportunities Overview</div>,
  },
  "Open Source": {
    Projects: () => <div>Open Source Projects</div>,
    Default: () => <div>Open Source Initiatives</div>,
  },
  "Our Startups": {
    Startups: () => <div>Startup Showcase</div>,
    Default: () => <div>Our Startup Portfolio</div>,
  },
  Blogs: {
    Home: () => <div>Latest Blog Posts</div>,
    "Search Blogs": () => <div>Blog Search Interface</div>,
    Default: () => <div>Blog Content</div>,
  },
  Announcements: {
    Announcements: () => <div>Latest Announcements</div>,
    Default: () => <div>Announcements Feed</div>,
  },
  "Your Profile": {
    Profile: () => <div>User Profile Dashboard</div>,
    Default: () => <div>Profile Overview</div>,
  },

  // Fallback Components
  Default: () => <div>Select an item from the navigation to begin</div>,
  Error: () => <div>Content not found</div>,
};

export type ContentKey = keyof typeof ContentComponents;
