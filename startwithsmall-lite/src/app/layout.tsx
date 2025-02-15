import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Load the normal Poppins font (weight 400)
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Minimal Next App",
  description:
    "A minimal example with left + right nav for /startwithsmall/[username]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
