import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Workshops | UF DSI",
  description: "View our upcoming workshops, events, and activities. Join us for hands-on learning experiences, networking opportunities, and more.",
};

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 