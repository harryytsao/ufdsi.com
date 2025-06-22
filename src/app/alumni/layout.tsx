import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni | UF DSI",
  description: "Meet the alumni and past executive boards of the UF Data Science and Informatics student organization",
};

export default function AlumniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 