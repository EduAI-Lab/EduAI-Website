import type { Route } from "./+types/home";
import HomePage from "./_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI-Ed Research" },
    { name: "description", content: "AI in Education Research Group" },
  ];
}

export default function Home() {
  return <HomePage />;
}
