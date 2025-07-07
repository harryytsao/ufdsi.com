import SymposiumNew from '@/components/symposium-new/index';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Symposium - New",
  description: "DSI Spring Research Symposium 2025 - A day of learning, networking, and innovation",
};

export default function SymposiumNewPage() {
  return <SymposiumNew />;
}
